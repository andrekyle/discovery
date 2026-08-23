// Local, read-only export receiver. The browser (using the signed-in Super User
// session) fetches data from Supabase and POSTs it here; this server only writes
// files to disk under ../supabase-export. It never touches Supabase itself.
import http from "node:http";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..", "supabase-export");
mkdirSync(ROOT, { recursive: true });

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function safeJoin(base, rel) {
  const target = normalize(join(base, rel));
  if (!target.startsWith(base)) throw new Error("path escape blocked: " + rel);
  return target;
}

const server = http.createServer((req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(204, CORS);
    res.end();
    return;
  }
  if (req.method === "GET" && req.url === "/ping") {
    res.writeHead(200, CORS);
    res.end("ok");
    return;
  }
  if (req.method !== "POST") {
    res.writeHead(405, CORS);
    res.end("method");
    return;
  }
  const chunks = [];
  req.on("data", (c) => chunks.push(c));
  req.on("end", () => {
    try {
      const body = Buffer.concat(chunks).toString("utf8");
      if (req.url === "/json") {
        const { name, json } = JSON.parse(body);
        const p = safeJoin(join(ROOT, "data"), name + ".json");
        mkdirSync(dirname(p), { recursive: true });
        writeFileSync(p, JSON.stringify(json, null, 2));
        console.log("json  ", name, "(" + (JSON.stringify(json).length) + " bytes)");
      } else if (req.url === "/file") {
        const { path, b64 } = JSON.parse(body);
        const p = safeJoin(join(ROOT, "storage"), path);
        mkdirSync(dirname(p), { recursive: true });
        writeFileSync(p, Buffer.from(b64, "base64"));
        console.log("file  ", path);
      } else {
        res.writeHead(404, CORS);
        res.end("route");
        return;
      }
      res.writeHead(200, CORS);
      res.end("ok");
    } catch (e) {
      console.error("ERR", e.message);
      res.writeHead(500, CORS);
      res.end(String(e.message));
    }
  });
});

server.listen(8787, "127.0.0.1", () => {
  console.log("export server ready on http://127.0.0.1:8787 -> " + ROOT);
});
