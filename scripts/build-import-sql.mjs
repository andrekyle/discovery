// Generates SQL import files + a manifest from the exported JSON tables.
// Read-only: touches only ./supabase-export on disk, never Supabase.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..", "supabase-export");
const DATA = join(ROOT, "data");
const OUT = join(ROOT, "import");
mkdirSync(OUT, { recursive: true });

const q = (v) => {
  if (v === null || v === undefined) return "null";
  if (typeof v === "number") return String(v);
  if (typeof v === "boolean") return v ? "true" : "false";
  return "'" + String(v).replace(/'/g, "''") + "'";
};

function tableSql(name, rows, columns, conflict) {
  if (!rows.length) return `-- ${name}: 0 rows\n`;
  const lines = [`-- ${name}: ${rows.length} rows`, `insert into public.${name} (${columns.join(", ")}) values`];
  const chunks = [];
  const BATCH = 200;
  for (let i = 0; i < rows.length; i += BATCH) {
    const slice = rows.slice(i, i + BATCH);
    const values = slice.map((r) => "  (" + columns.map((c) => q(r[c])).join(", ") + ")").join(",\n");
    const tail = conflict ? `\non conflict (${conflict}) do nothing;` : ";";
    chunks.push(`insert into public.${name} (${columns.join(", ")}) values\n${values}${tail}`);
  }
  return chunks.join("\n\n") + "\n";
}

const read = (n) => JSON.parse(readFileSync(join(DATA, n + ".json"), "utf8"));

const appState = read("app_state");
const sharedState = read("shared_state");
const admins = read("admins");
const chat = read("chat_messages");

writeFileSync(join(OUT, "01_shared_state.sql"),
  "-- shared_state has no FK to auth.users; safe to import first.\n" +
  tableSql("shared_state", sharedState, ["key", "value", "updated_at"], "key"));

writeFileSync(join(OUT, "02_app_state.sql"),
  "-- REQUIRES: matching rows in auth.users (user_id FK). Recreate auth accounts first.\n" +
  tableSql("app_state", appState, ["user_id", "key", "value", "updated_at"], "user_id,key"));

writeFileSync(join(OUT, "03_admins.sql"),
  "-- REQUIRES: matching rows in auth.users (user_id FK).\n" +
  tableSql("admins", admins, ["user_id"], "user_id"));

writeFileSync(join(OUT, "04_chat_messages.sql"),
  "-- REQUIRES: matching rows in auth.users (sender/recipient FK).\n" +
  tableSql("chat_messages", chat,
    ["id", "sender_user_id", "recipient_user_id", "sender_profile_id", "recipient_profile_id",
     "sender_name", "sender_role", "body", "sent_at", "read_at", "edited_at", "reaction"],
    "id"));

// Build a list of the distinct auth user ids referenced, with the name/email/role
// pulled from each account's itss.profiles row so accounts can be recreated.
const userInfo = new Map();
for (const row of appState) {
  if (row.key !== "itss.profiles") continue;
  try {
    for (const p of JSON.parse(row.value)) {
      userInfo.set(row.user_id, {
        user_id: row.user_id,
        name: p.name,
        email: p.enrolment?.email ?? p.email ?? null,
        role: p.role,
      });
    }
  } catch {}
}
const users = [...userInfo.values()];
writeFileSync(join(OUT, "users_to_recreate.json"), JSON.stringify(users, null, 2));

// Storage file inventory
function walk(dir, base) {
  let out = [];
  for (const e of readdirSync(dir)) {
    const full = join(dir, e);
    const st = statSync(full);
    if (st.isDirectory()) out = out.concat(walk(full, base));
    else out.push({ path: full.slice(base.length + 1).replace(/\\/g, "/"), size: st.size });
  }
  return out;
}
let storageFiles = [];
try { storageFiles = walk(join(ROOT, "storage"), join(ROOT, "storage")); } catch {}

const manifest = {
  exportedAt: new Date().toISOString(),
  source: "https://hxbplzbkunmbepjgyftn.supabase.co",
  tables: {
    app_state: appState.length,
    shared_state: sharedState.length,
    admins: admins.length,
    chat_messages: chat.length,
  },
  distinctAuthUsers: users.length,
  storage: { bucket: "files", fileCount: storageFiles.length, totalBytes: storageFiles.reduce((a, f) => a + f.size, 0) },
};
writeFileSync(join(ROOT, "manifest.json"), JSON.stringify({ ...manifest, storageFiles }, null, 2));

console.log(JSON.stringify(manifest, null, 2));
