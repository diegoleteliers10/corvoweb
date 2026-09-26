import puppeteer from "puppeteer-core";

const browser = await puppeteer.connect({
  browserURL: "http://localhost:9222",
  defaultViewport: { width: 1440, height: 900 },
});

const shots = [
  { url: "http://localhost:4321/", w: 1440, h: 900, out: "home-desktop", full: true },
  { url: "http://localhost:4321/", w: 390, h: 844, out: "home-mobile", full: true },
  { url: "http://localhost:4321/download/", w: 390, h: 844, out: "download-mobile", full: true },
  { url: "http://localhost:4321/extensions/", w: 1440, h: 900, out: "extensions-desktop", full: true },
];

for (const s of shots) {
  const page = await browser.newPage();
  await page.setViewport({ width: s.w, height: s.h });
  await page.goto(s.url, { waitUntil: "networkidle0", timeout: 30000 });
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: `/tmp/corvo-${s.out}.png`, fullPage: s.full });
  console.log("saved", s.out);
  await page.close();
}

await browser.disconnect();
