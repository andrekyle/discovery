/**
 * Generates the AZ-900 lesson diagrams as SVG files in public/figures/az900/.
 * Consistent Azure-branded style: white card, blue header bar, rounded boxes.
 * Run: node scripts/gen-az900-figures.mjs
 */
import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";

const OUT = join(process.cwd(), "public", "figures", "az900");
mkdirSync(OUT, { recursive: true });

/* palette */
const AZURE = "#0078d4";
const AZURE_DARK = "#005a9e";
const AZURE_LIGHT = "#e6f2fb";
const SKY = "#50b0f0";
const INK = "#1b2733";
const MUTED = "#5b6770";
const GREEN = "#107c10";
const GREEN_BG = "#e6f2e6";
const ORANGE = "#d83b01";
const ORANGE_BG = "#fdeee8";
const PURPLE = "#5c2d91";
const PURPLE_BG = "#efe9f7";
const GRAY_BG = "#f3f4f6";
const BORDER = "#c7d5e0";

const FONT = `font-family="Segoe UI, system-ui, -apple-system, sans-serif"`;

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svgDoc(w, h, title, body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(title)}">
<defs>
  <marker id="arr" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M0 0L10 5L0 10z" fill="${AZURE_DARK}"/>
  </marker>
</defs>
<rect x="0" y="0" width="${w}" height="${h}" rx="14" fill="#ffffff" stroke="${BORDER}"/>
<rect x="0" y="0" width="${w}" height="52" rx="14" fill="${AZURE}"/>
<rect x="0" y="30" width="${w}" height="22" fill="${AZURE}"/>
<text x="${w / 2}" y="34" ${FONT} font-size="21" font-weight="700" fill="#ffffff" text-anchor="middle">${esc(title)}</text>
${body}
</svg>`;
}

function box(x, y, w, h, fill, stroke, label, opts = {}) {
  const { size = 15, weight = 600, color = INK, sub, subSize = 12.5, subColor = MUTED, subLines = [] } = opts;
  const lines = Array.isArray(label) ? label : [label];
  const lineH = size * 1.25;
  const subs = sub ? [sub, ...subLines] : subLines;
  const totalH = lines.length * lineH + subs.length * (subSize * 1.3);
  let ty = y + h / 2 - totalH / 2 + size;
  let out = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="1.4"/>`;
  for (const ln of lines) {
    out += `<text x="${x + w / 2}" y="${ty}" ${FONT} font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="middle">${esc(ln)}</text>`;
    ty += lineH;
  }
  for (const s of subs) {
    out += `<text x="${x + w / 2}" y="${ty}" ${FONT} font-size="${subSize}" fill="${subColor}" text-anchor="middle">${esc(s)}</text>`;
    ty += subSize * 1.3;
  }
  return out;
}

const arrow = (x1, y1, x2, y2) =>
  `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="${AZURE_DARK}" stroke-width="2.4" fill="none" marker-end="url(#arr)"/>`;

const label = (x, y, text, opts = {}) => {
  const { size = 13.5, weight = 400, color = MUTED, anchor = "middle" } = opts;
  return `<text x="${x}" y="${y}" ${FONT} font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="${anchor}">${esc(text)}</text>`;
};

const files = {};

/* ---------- 1. Exam skill areas ---------- */
files["az900-exam-areas.svg"] = svgDoc(960, 400, "AZ-900 — the three skill areas", (() => {
  let b = "";
  const data = [
    ["Lesson 1", "Describe cloud concepts", "25–30%", AZURE_LIGHT, AZURE],
    ["Lesson 2", "Describe Azure architecture and services", "35–40%", GREEN_BG, GREEN],
    ["Lesson 3", "Describe Azure management and governance", "30–35%", PURPLE_BG, PURPLE],
  ];
  const weights = [27.5, 37.5, 32.5];
  let x = 60;
  data.forEach((d, i) => {
    const w = (weights[i] / 97.5) * 840;
    b += box(x, 90, w - 14, 150, d[3], d[4], [d[0], d[2]], { size: 19, sub: "", subLines: [] });
    b += label(x + (w - 14) / 2, 265, d[1], { size: 13.5, color: INK, weight: 600 });
    x += w;
  });
  b += label(480, 320, "±40–60 questions · 45 minutes · pass mark 700/1000 · no prerequisites", { size: 15, color: MUTED });
  b += label(480, 350, "Every question on the exam belongs to one of these three areas", { size: 13 });
  return b;
})());

/* ---------- 2. What the cloud delivers ---------- */
files["az900-cloud-services.svg"] = svgDoc(960, 430, "Cloud computing — services delivered over the internet", (() => {
  let b = "";
  b += box(355, 80, 250, 84, AZURE, AZURE_DARK, ["The internet"], { size: 18, color: "#ffffff" });
  const items = [
    ["Compute", "VMs · containers · serverless", 60],
    ["Storage", "blobs · files · disks", 290],
    ["Networking", "VNets · VPN · DNS", 520],
    ["Higher services", "databases · AI · IoT", 750],
  ];
  for (const [t, s, x] of items) {
    b += box(x, 240, 190, 96, AZURE_LIGHT, AZURE, t, { size: 16, sub: s });
    b += arrow(x + 95, 238, x + 95, 172).replace('marker-end', 'marker-start');
  }
  b += label(480, 390, "Rent what you need, pay for what you use — no datacenter of your own required", { size: 14.5, color: INK, weight: 600 });
  return b;
})());

/* ---------- 3. Shared responsibility model ---------- */
files["az900-shared-responsibility.svg"] = svgDoc(960, 560, "The shared responsibility model", (() => {
  let b = "";
  const cols = [
    ["On-premises", [1, 1, 1, 1]],
    ["IaaS", [1, 1, 0, 0]],
    ["PaaS", [1, 2, 0, 0]],
    ["SaaS", [1, 0, 0, 0]],
  ];
  const rows = ["Data, devices, accounts & identities", "Applications & runtime", "Operating system", "Physical hosts, network & datacenter"];
  const x0 = 320, colW = 150, rowH = 92, y0 = 96;
  rows.forEach((r, ri) => {
    b += `<text x="300" y="${y0 + ri * rowH + rowH / 2 + 5}" ${FONT} font-size="13.5" font-weight="600" fill="${INK}" text-anchor="end">${esc(r)}</text>`;
  });
  cols.forEach((c, ci) => {
    const x = x0 + ci * (colW + 8);
    b += label(x + colW / 2, 86, c[0], { size: 15, weight: 700, color: INK });
    c[1].forEach((v, ri) => {
      const y = y0 + ri * rowH;
      const fill = v === 1 ? AZURE_LIGHT : v === 2 ? "#fff4e5" : GREEN_BG;
      const stroke = v === 1 ? AZURE : v === 2 ? ORANGE : GREEN;
      const txt = v === 1 ? "You" : v === 2 ? "Shared" : "Microsoft";
      const color = v === 1 ? AZURE_DARK : v === 2 ? ORANGE : GREEN;
      b += box(x, y + 6, colW, rowH - 14, fill, stroke, txt, { size: 14.5, color });
    });
  });
  b += label(480, 528, "You ALWAYS keep your data, devices and identities — the provider always owns the physical layer", { size: 14, weight: 600, color: INK });
  return b;
})());

/* ---------- 4. Cloud models ---------- */
files["az900-cloud-models.svg"] = svgDoc(960, 470, "Cloud models — public, private, hybrid", (() => {
  let b = "";
  b += box(60, 90, 260, 200, AZURE_LIGHT, AZURE, ["Public cloud"], { size: 17, subLines: ["Shared provider infrastructure", "No CapEx · scale instantly", "Anyone can purchase"] });
  b += box(640, 90, 260, 200, PURPLE_BG, PURPLE, ["Private cloud"], { size: 17, subLines: ["Single organisation", "Maximum control", "You own the hardware cost"] });
  b += box(350, 140, 260, 200, GREEN_BG, GREEN, ["Hybrid cloud"], { size: 17, subLines: ["Best of both worlds", "Sensitive workloads private,", "burst to public for scale"] });
  b += arrow(322, 190, 348, 210);
  b += arrow(638, 190, 612, 210);
  b += label(480, 388, "Multi-cloud: services from more than one public provider — managed consistently with Azure Arc", { size: 14, color: INK, weight: 600 });
  b += label(480, 418, "Choose per workload: control vs cost vs speed of scaling", { size: 13 });
  return b;
})());

/* ---------- 5a. Pricing models ---------- */
files["az900-pricing-models.svg"] = svgDoc(960, 430, "Comparing cloud pricing models", (() => {
  let b = "";
  const items = [
    ["Pay-as-you-go", "No commitment", "Variable workloads", AZURE_LIGHT, AZURE],
    ["Reserved instances", "1 or 3 years · up to ~72% off", "Steady production", GREEN_BG, GREEN],
    ["Savings plan", "Fixed hourly spend, 1/3 yrs", "Predictable spend, flexible services", PURPLE_BG, PURPLE],
    ["Spot", "Deepest discount · can be evicted", "Interruptible batch jobs", ORANGE_BG, ORANGE],
  ];
  items.forEach((it, i) => {
    const x = 55 + i * 220;
    b += box(x, 100, 200, 170, it[3], it[4], it[0], { size: 15.5, subLines: [it[1], "", it[2]] });
  });
  b += label(480, 320, "Commitment buys discount — flexibility costs more per hour", { size: 15, weight: 600, color: INK });
  b += label(480, 350, "Serverless goes further: billed per execution, scales to zero between events", { size: 13.5 });
  return b;
})());

/* ---------- 5b. Serverless ---------- */
files["az900-serverless.svg"] = svgDoc(960, 380, "Serverless — code runs only when events happen", (() => {
  let b = "";
  b += box(60, 120, 200, 110, AZURE_LIGHT, AZURE, ["Event"], { size: 16, subLines: ["HTTP request · timer", "file upload · message"] });
  b += arrow(262, 175, 358, 175);
  b += box(360, 105, 240, 140, GREEN_BG, GREEN, ["Azure Functions"], { size: 17, subLines: ["platform provisions,", "runs and scales the code"] });
  b += arrow(602, 175, 698, 175);
  b += box(700, 120, 200, 110, PURPLE_BG, PURPLE, ["Bill"], { size: 16, subLines: ["only for execution time", "zero when idle"] });
  b += label(480, 305, "No servers to size, patch or manage — scaling from zero to peak is automatic", { size: 14.5, weight: 600, color: INK });
  return b;
})());

/* ---------- 6. Scaling ---------- */
files["az900-scaling.svg"] = svgDoc(960, 470, "Vertical vs horizontal scaling", (() => {
  let b = "";
  b += label(255, 95, "Vertical — scale UP / DOWN", { size: 16, weight: 700, color: INK });
  b += box(180, 260, 150, 100, AZURE_LIGHT, AZURE, ["VM", "4 vCPU · 8 GB"], { size: 13.5 });
  b += arrow(255, 250, 255, 190);
  b += box(155, 115, 200, 130, GREEN_BG, GREEN, ["Bigger VM", "16 vCPU · 64 GB"], { size: 14.5 });
  b += label(255, 400, "More power on ONE machine", { size: 13.5, color: INK });

  b += label(690, 95, "Horizontal — scale OUT / IN", { size: 16, weight: 700, color: INK });
  for (let i = 0; i < 3; i++) b += box(545 + i * 105, 150, 90, 80, AZURE_LIGHT, AZURE, ["VM"], { size: 14 });
  b += arrow(690, 245, 690, 285);
  for (let i = 0; i < 5; i++) b += box(505 + i * 78, 295, 66, 66, GREEN_BG, GREEN, ["VM"], { size: 12.5 });
  b += label(690, 400, "More IDENTICAL machines side by side (VM scale sets do this automatically)", { size: 13.5, color: INK });
  b += label(480, 440, "Elasticity = automatic scaling that follows demand in both directions", { size: 14, weight: 600, color: AZURE_DARK });
  return b;
})());

/* ---------- 7. Benefits ---------- */
files["az900-benefits.svg"] = svgDoc(960, 430, "Benefits of the cloud", (() => {
  let b = "";
  const items = [
    ["High availability", "SLA-backed uptime"],
    ["Scalability", "vertical & horizontal"],
    ["Elasticity", "automatic scaling"],
    ["Reliability", "recover from failures"],
    ["Predictability", "performance & cost"],
    ["Security", "provider-scale defence"],
    ["Governance", "templates & policies"],
    ["Manageability", "manage from anywhere"],
  ];
  items.forEach((it, i) => {
    const x = 60 + (i % 4) * 220;
    const y = 95 + Math.floor(i / 4) * 130;
    b += box(x, y, 200, 108, i % 2 ? AZURE_LIGHT : GREEN_BG, i % 2 ? AZURE : GREEN, it[0], { size: 15.5, sub: it[1] });
  });
  b += label(480, 390, "The exam loves benefit definitions — know each one in a sentence", { size: 13.5 });
  return b;
})());

/* ---------- 8. Service types stack ---------- */
files["az900-service-types.svg"] = svgDoc(960, 560, "IaaS vs PaaS vs SaaS — who manages what", (() => {
  let b = "";
  const layers = ["Application & data", "Runtime & middleware", "Operating system", "Virtualisation & servers", "Network & datacenter"];
  const cols = [
    ["On-prem", [0, 0, 0, 0, 0]],
    ["IaaS", [0, 0, 0, 1, 1]],
    ["PaaS", [0, 1, 1, 1, 1]],
    ["SaaS", [1, 1, 1, 1, 1]],
  ];
  const x0 = 330, colW = 145, rowH = 74, y0 = 100;
  layers.forEach((l, i) => {
    b += `<text x="312" y="${y0 + i * rowH + rowH / 2 + 5}" ${FONT} font-size="13.5" font-weight="600" fill="${INK}" text-anchor="end">${esc(l)}</text>`;
  });
  cols.forEach((c, ci) => {
    const x = x0 + ci * (colW + 8);
    b += label(x + colW / 2, 90, c[0], { size: 15, weight: 700, color: INK });
    c[1].forEach((v, ri) => {
      const y = y0 + ri * rowH;
      b += box(x, y + 5, colW, rowH - 12, v ? GREEN_BG : AZURE_LIGHT, v ? GREEN : AZURE, v ? "Provider" : "You", {
        size: 13.5,
        color: v ? GREEN : AZURE_DARK,
      });
    });
  });
  b += label(480, 520, "IaaS = most control · SaaS = least management · PaaS in between", { size: 14.5, weight: 600, color: INK });
  return b;
})());

/* ---------- 9. Regions & zones ---------- */
files["az900-regions-zones.svg"] = svgDoc(960, 470, "Regions, availability zones and region pairs", (() => {
  let b = "";
  b += `<rect x="55" y="85" width="440" height="290" rx="12" fill="${AZURE_LIGHT}" stroke="${AZURE}" stroke-width="1.5"/>`;
  b += label(275, 112, "Region — South Africa North (Johannesburg)", { size: 14.5, weight: 700, color: AZURE_DARK });
  for (let i = 0; i < 3; i++) {
    b += box(80 + i * 135, 135, 120, 130, "#ffffff", AZURE, [`Zone ${i + 1}`], { size: 14, subLines: ["own power,", "cooling, network"] });
  }
  b += label(275, 300, "Zones = physically separate datacenters,", { size: 12.5, color: INK });
  b += label(275, 318, "linked by private fibre — survive a datacenter failure", { size: 12.5, color: INK });

  b += `<rect x="620" y="130" width="280" height="180" rx="12" fill="${GREEN_BG}" stroke="${GREEN}" stroke-width="1.5"/>`;
  b += label(760, 160, "Paired region", { size: 14.5, weight: 700, color: GREEN });
  b += label(760, 185, "South Africa West (Cape Town)", { size: 13, color: INK });
  b += label(760, 215, "≥ 300 miles away", { size: 12.5 });
  b += label(760, 237, "disaster failover target", { size: 12.5 });
  b += label(760, 259, "staged platform updates", { size: 12.5 });
  b += `<path d="M497 230 C560 230 560 220 618 220" stroke="${GREEN}" stroke-width="2.6" fill="none" stroke-dasharray="7 5" marker-end="url(#arr)"/>`;
  b += label(480, 420, "Sovereign regions (e.g. US Government) are isolated instances for compliance-critical customers", { size: 13.5, color: INK, weight: 600 });
  return b;
})());

/* ---------- 10. Hierarchy ---------- */
files["az900-hierarchy.svg"] = svgDoc(960, 560, "Management groups → subscriptions → resource groups → resources", (() => {
  let b = "";
  b += box(355, 80, 250, 74, PURPLE_BG, PURPLE, ["Management group", "Corp-IT"], { size: 14.5 });
  b += arrow(480, 156, 300, 205);
  b += arrow(480, 156, 660, 205);
  b += box(185, 208, 230, 70, AZURE_LIGHT, AZURE, ["Subscription: Prod"], { size: 14.5 });
  b += box(545, 208, 230, 70, AZURE_LIGHT, AZURE, ["Subscription: Dev"], { size: 14.5 });
  b += arrow(300, 280, 300, 325);
  b += arrow(660, 280, 660, 325);
  b += box(185, 328, 230, 66, GREEN_BG, GREEN, ["Resource group", "rg-website"], { size: 13.5 });
  b += box(545, 328, 230, 66, GREEN_BG, GREEN, ["Resource group", "rg-sandbox"], { size: 13.5 });
  b += arrow(300, 396, 300, 438);
  const r = ["Web app", "SQL DB", "Storage"];
  r.forEach((t, i) => {
    b += box(120 + i * 125, 440, 112, 58, GRAY_BG, MUTED, [t], { size: 12.5 });
  });
  b += box(600, 440, 120, 58, GRAY_BG, MUTED, ["Test VM"], { size: 12.5 });
  b += arrow(660, 396, 660, 438);
  b += label(480, 532, "Policy and access applied at a level are INHERITED by everything below it", { size: 14, weight: 600, color: INK });
  return b;
})());

/* ---------- 11a. Compute options ---------- */
files["az900-compute-services.svg"] = svgDoc(960, 470, "Choosing Azure compute", (() => {
  let b = "";
  const items = [
    ["Virtual machines", "full OS control", "lift-and-shift · custom stacks", AZURE_LIGHT, AZURE],
    ["Containers ACI / AKS", "no OS inside — fast, dense", "microservices · portability", GREEN_BG, GREEN],
    ["App Service", "managed web platform", "web apps & APIs, no servers", PURPLE_BG, PURPLE],
    ["Functions", "serverless, event-driven", "pay per execution", ORANGE_BG, ORANGE],
  ];
  items.forEach((it, i) => {
    const x = 55 + i * 220;
    b += box(x, 100, 200, 170, it[3], it[4], it[0], { size: 15, subLines: [it[1], "", it[2]] });
  });
  b += label(480, 320, "More management ⟵ VMs · containers · App Service · Functions ⟶ less management", { size: 14.5, weight: 600, color: INK });
  b += label(480, 352, "Also: VM scale sets (auto-scaling identical VMs) · availability sets (update + fault domains) · Azure Virtual Desktop", { size: 12.5 });
  return b;
})());

/* ---------- 11b. VM resources ---------- */
files["az900-vm-resources.svg"] = svgDoc(960, 430, "What a virtual machine needs", (() => {
  let b = "";
  b += box(380, 155, 200, 120, AZURE, AZURE_DARK, ["Azure VM"], { size: 18, color: "#ffffff" });
  const parts = [
    ["Size", "vCPUs & RAM", 70, 95],
    ["Managed disks", "OS + data disks", 70, 265],
    ["Network interface", "in a VNet subnet", 700, 95],
    ["IP address & NSG", "public/private + firewall rules", 700, 265],
  ];
  for (const [t, s, x, y] of parts) {
    b += box(x, y, 195, 88, AZURE_LIGHT, AZURE, t, { size: 14.5, sub: s });
    const cx = x < 400 ? x + 197 : x - 2;
    const tx = x < 400 ? 378 : 582;
    b += arrow(cx, y + 44, tx, 215);
  }
  b += label(480, 340, "Creating a VM creates these supporting resources with it — they live in the same resource group", { size: 13.5, weight: 600, color: INK });
  return b;
})());

/* ---------- 12. Networking ---------- */
files["az900-vnet.svg"] = svgDoc(960, 560, "Azure networking at a glance", (() => {
  let b = "";
  b += `<rect x="55" y="85" width="520" height="300" rx="12" fill="${AZURE_LIGHT}" stroke="${AZURE}" stroke-width="1.5"/>`;
  b += label(315, 112, "Virtual network 10.0.0.0/16", { size: 14.5, weight: 700, color: AZURE_DARK });
  b += box(85, 130, 220, 100, "#ffffff", AZURE, ["Subnet: web", "10.0.1.0/24"], { size: 13 });
  b += box(330, 130, 220, 100, "#ffffff", AZURE, ["Subnet: data", "10.0.2.0/24"], { size: 13 });
  b += box(85, 255, 220, 100, "#ffffff", GREEN, ["Private endpoint", "service on a private IP"], { size: 13 });
  b += box(330, 255, 220, 100, "#ffffff", ORANGE, ["Public endpoint", "internet-reachable IP"], { size: 13 });

  b += `<rect x="640" y="85" width="260" height="130" rx="12" fill="${GREEN_BG}" stroke="${GREEN}" stroke-width="1.5"/>`;
  b += label(770, 112, "Peered VNet", { size: 14, weight: 700, color: GREEN });
  b += label(770, 138, "private backbone traffic,", { size: 12.5 });
  b += label(770, 158, "same or different region", { size: 12.5 });
  b += `<path d="M577 160 h60" stroke="${GREEN}" stroke-width="2.6" stroke-dasharray="7 5" marker-end="url(#arr)"/>`;

  b += `<rect x="640" y="245" width="260" height="140" rx="12" fill="${PURPLE_BG}" stroke="${PURPLE}" stroke-width="1.5"/>`;
  b += label(770, 272, "On-premises office", { size: 14, weight: 700, color: PURPLE });
  b += label(770, 300, "VPN Gateway — encrypted", { size: 12.5 });
  b += label(770, 318, "tunnel over the internet", { size: 12.5 });
  b += label(770, 344, "ExpressRoute — private", { size: 12.5 });
  b += label(770, 362, "dedicated circuit", { size: 12.5 });
  b += `<path d="M577 315 h60" stroke="${PURPLE}" stroke-width="2.6" marker-end="url(#arr)"/>`;

  b += label(480, 430, "Subnets segment the address space · peering joins VNets · endpoints control exposure", { size: 14, weight: 600, color: INK });
  b += label(480, 460, "Azure DNS answers name lookups on Azure's global anycast network", { size: 13 });
  return b;
})());

/* ---------- 13a. Storage tiers ---------- */
files["az900-storage-tiers.svg"] = svgDoc(960, 430, "Blob storage access tiers", (() => {
  let b = "";
  const tiers = [
    ["Hot", "frequent access", "highest storage · lowest access", AZURE_LIGHT, AZURE],
    ["Cool", "infrequent · ≥30 days", "lower storage · higher access", GREEN_BG, GREEN],
    ["Cold", "rare · ≥90 days", "lower still · higher access", PURPLE_BG, PURPLE],
    ["Archive", "offline · ≥180 days", "cheapest · hours to rehydrate", ORANGE_BG, ORANGE],
  ];
  tiers.forEach((t, i) => {
    const x = 55 + i * 220;
    b += box(x, 100, 200, 165, t[3], t[4], t[0], { size: 17, subLines: [t[1], "", t[2]] });
  });
  b += arrow(80, 300, 880, 300);
  b += label(480, 330, "cheaper to store, more expensive (and slower) to access ⟶", { size: 13.5, color: INK });
  b += label(480, 370, "Match the tier to how often the data is touched", { size: 14, weight: 600, color: INK });
  return b;
})());

/* ---------- 13b. Redundancy ---------- */
files["az900-redundancy.svg"] = svgDoc(960, 470, "Storage redundancy — how many copies, how far apart", (() => {
  let b = "";
  const opts = [
    ["LRS", "3 copies, one datacenter", "survives drive/rack failure", AZURE_LIGHT, AZURE],
    ["ZRS", "3 copies across zones", "survives a datacenter loss", GREEN_BG, GREEN],
    ["GRS", "LRS + 3 in paired region", "survives a regional disaster", PURPLE_BG, PURPLE],
    ["GZRS", "ZRS + 3 in paired region", "highest durability", ORANGE_BG, ORANGE],
  ];
  opts.forEach((o, i) => {
    const x = 55 + i * 220;
    b += box(x, 100, 200, 165, o[3], o[4], o[0], { size: 17, subLines: [o[1], "", o[2]] });
  });
  b += label(480, 310, "RA-GRS / RA-GZRS add read access to the secondary region at any time", { size: 13.5 });
  b += label(480, 350, "More copies, further apart = more durable (and more expensive)", { size: 14, weight: 600, color: INK });
  b += label(480, 395, "Moving data: AzCopy (CLI) · Storage Explorer (GUI) · File Sync (cache shares on-prem) · Azure Migrate & Data Box (bulk)", { size: 12.5 });
  return b;
})());

/* ---------- 14a. Zero trust / defence in depth ---------- */
files["az900-defence-in-depth.svg"] = svgDoc(960, 560, "Defence in depth — layered security", (() => {
  let b = "";
  const rings = [
    ["Physical security", 430, "#f6f8fa"],
    ["Identity & access", 375, AZURE_LIGHT],
    ["Perimeter (DDoS)", 320, "#dceefb"],
    ["Network (NSGs)", 265, GREEN_BG],
    ["Compute", 210, "#d8ecd8"],
    ["Application", 155, PURPLE_BG],
    ["Data", 100, ORANGE_BG],
  ];
  const cx = 480, cy = 320;
  rings.forEach(([t, r, fill], i) => {
    b += `<ellipse cx="${cx}" cy="${cy}" rx="${r}" ry="${(r * 0.52)}" fill="${fill}" stroke="${BORDER}"/>`;
    b += label(cx, cy - r * 0.52 + 22, t, { size: 13, weight: 600, color: INK });
  });
  b += label(cx, cy + 12, "DATA", { size: 16, weight: 700, color: ORANGE });
  b += label(480, 545, "No single layer failing exposes the data — attackers must beat every ring", { size: 14, weight: 600, color: INK });
  return b;
})());

/* ---------- 14b. Identity services ---------- */
files["az900-identity.svg"] = svgDoc(960, 470, "Identity and access in Azure", (() => {
  let b = "";
  b += box(355, 85, 250, 90, AZURE, AZURE_DARK, ["Microsoft Entra ID"], { size: 17, color: "#ffffff", subLines: [], sub: "" });
  b += label(480, 160, "cloud identity & access management", { size: 12.5, color: "#ffffff" });
  const items = [
    ["MFA & passwordless", "prove who you are", 60],
    ["Single sign-on", "one credential, many apps", 290],
    ["Conditional Access", "signals decide the rules", 520],
    ["RBAC", "least-privilege roles at scopes", 750],
  ];
  for (const [t, s, x] of items) {
    b += box(x, 250, 190, 100, AZURE_LIGHT, AZURE, t, { size: 13.5, sub: s });
    b += arrow(480, 177, x + 95, 246);
  }
  b += label(480, 405, "Zero Trust: verify explicitly · least privilege · assume breach", { size: 14.5, weight: 600, color: INK });
  b += label(480, 435, "Microsoft Defender for Cloud watches posture and threats across clouds", { size: 13 });
  return b;
})());

/* ---------- 15. Cost factors ---------- */
files["az900-cost-factors.svg"] = svgDoc(960, 470, "What drives your Azure bill", (() => {
  let b = "";
  const items = [
    ["Resource type & size", "big VM > small VM"],
    ["Consumption", "hours run · GB stored"],
    ["Maintenance", "idle resources still bill"],
    ["Geography", "prices differ by region"],
    ["Network traffic", "egress is billed, ingress free"],
    ["Subscription type", "trial · PAYG · enterprise"],
  ];
  items.forEach((it, i) => {
    const x = 70 + (i % 3) * 290;
    const y = 95 + Math.floor(i / 3) * 130;
    b += box(x, y, 260, 108, i % 2 ? GREEN_BG : AZURE_LIGHT, i % 2 ? GREEN : AZURE, it[0], { size: 15, sub: it[1] });
  });
  b += label(480, 385, "Estimate BEFORE: Pricing calculator (new builds) · TCO calculator (vs on-premises)", { size: 13.5, weight: 600, color: INK });
  b += label(480, 415, "Track AFTER: Microsoft Cost Management — budgets, alerts, forecasts · tags for per-team reporting", { size: 13 });
  return b;
})());

/* ---------- 16. Governance ---------- */
files["az900-governance.svg"] = svgDoc(960, 430, "Governance and compliance toolbox", (() => {
  let b = "";
  const items = [
    ["Azure Policy", "rules resources must obey", "allowed regions · required tags", AZURE_LIGHT, AZURE],
    ["Resource locks", "stop accidents", "CanNotDelete · ReadOnly", GREEN_BG, GREEN],
    ["Microsoft Purview", "data governance", "map · catalogue · classify", PURPLE_BG, PURPLE],
    ["Service Trust Portal", "compliance evidence", "audit reports · certifications", ORANGE_BG, ORANGE],
  ];
  items.forEach((it, i) => {
    const x = 55 + i * 220;
    b += box(x, 100, 200, 170, it[3], it[4], it[0], { size: 14.5, subLines: [it[1], "", it[2]] });
  });
  b += label(480, 320, "Policy defines WHAT may exist · RBAC defines WHO may act · locks stop even permitted mistakes", { size: 13.5, weight: 600, color: INK });
  b += label(480, 350, "Related policies bundle into initiatives (e.g. a full regulatory standard)", { size: 13 });
  return b;
})());

/* ---------- 17. Management tools ---------- */
files["az900-management-tools.svg"] = svgDoc(960, 470, "Managing and deploying Azure resources", (() => {
  let b = "";
  b += box(330, 300, 300, 90, AZURE, AZURE_DARK, ["Azure Resource Manager"], { size: 15.5, color: "#ffffff", sub: "" });
  b += label(480, 372, "every request flows through ARM", { size: 12, color: "#ffffff" });
  const tools = [
    ["Portal", "web GUI + dashboards", 60],
    ["Cloud Shell", "browser CLI, no install", 290],
    ["CLI & PowerShell", "az / New-AzVM scripts", 520],
    ["ARM templates", "infrastructure as code", 750],
  ];
  for (const [t, s, x] of tools) {
    b += box(x, 105, 190, 100, AZURE_LIGHT, AZURE, t, { size: 14, sub: s });
    b += arrow(x + 95, 207, 480 - (480 - (x + 95)) * 0.25, 296);
  }
  b += label(480, 430, "Azure Arc projects on-premises and multi-cloud machines into ARM — one management plane everywhere", { size: 13.5, weight: 600, color: INK });
  return b;
})());

/* ---------- 18. Monitoring ---------- */
files["az900-monitoring.svg"] = svgDoc(960, 470, "Monitoring: Advisor · Service Health · Monitor", (() => {
  let b = "";
  b += box(60, 95, 260, 130, AZURE_LIGHT, AZURE, ["Azure Advisor"], { size: 16, subLines: ["recommendations in 5 pillars:", "reliability · security · performance", "cost · operational excellence"] });
  b += box(350, 95, 260, 130, GREEN_BG, GREEN, ["Service Health"], { size: 16, subLines: ["Azure status (global)", "your services & regions", "resource health + alerts"] });
  b += box(640, 95, 260, 130, PURPLE_BG, PURPLE, ["Azure Monitor"], { size: 16, subLines: ["metrics & logs from", "every layer, one pipeline"] });
  const subs = [
    ["Log Analytics", "query the logs", 170],
    ["Alerts", "notify / auto-act", 480],
    ["App Insights", "web app telemetry", 790],
  ];
  for (const [t, s, x] of subs) {
    b += box(x - 105, 300, 210, 92, GRAY_BG, MUTED, t, { size: 14, sub: s });
  }
  b += arrow(770, 227, 265, 296);
  b += arrow(770, 227, 480, 296);
  b += arrow(770, 227, 790, 296);
  b += label(480, 435, "Advisor advises · Service Health warns about the platform · Monitor watches YOUR workloads", { size: 14, weight: 600, color: INK });
  return b;
})());

/* ---------- 19. Exam path ---------- */
files["az900-exam-path.svg"] = svgDoc(960, 380, "From this course to certified", (() => {
  let b = "";
  const steps = [
    ["Study", "3 lessons · 5-question checks", AZURE_LIGHT, AZURE],
    ["Quiz 80%+", "all three skill areas", GREEN_BG, GREEN],
    ["Practice test", "free official assessment", PURPLE_BG, PURPLE],
    ["Book & pass", "Pearson VUE · 700/1000", ORANGE_BG, ORANGE],
  ];
  steps.forEach((s, i) => {
    const x = 55 + i * 230;
    b += box(x, 110, 195, 130, s[2], s[3], s[0], { size: 16, sub: s[1] });
    if (i < 3) b += arrow(x + 197, 175, x + 228, 175);
  });
  b += label(480, 300, "After AZ-900: AI-900 (Module 9) → role-based certs like AZ-104 Azure Administrator", { size: 14, weight: 600, color: INK });
  return b;
})());

for (const [name, svg] of Object.entries(files)) {
  writeFileSync(join(OUT, name), svg, "utf8");
  console.log("wrote", name);
}
console.log(`\n${Object.keys(files).length} figures written to public/figures/az900/`);
