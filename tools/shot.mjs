import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";

const chromium = process.env.HOME + "/Library/Caches/ms-playwright/chromium-1208/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing";
const base = "http://localhost:4321";
mkdirSync(".impeccable/review", { recursive: true });

const browser = await puppeteer.launch({
  executablePath: chromium,
  headless: true,
  args: ["--no-sandbox", "--hide-scrollbars", "--force-device-scale-factor=1"],
});

const strip = async (page) => {
  await page.evaluate(() => document.querySelector("astro-dev-toolbar")?.remove());
};

const shots = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844 },
];

for (const s of shots) {
  const page = await browser.newPage();
  await page.setViewport({ width: s.width, height: s.height });
  await page.goto(base + "/", { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 700));
  await strip(page);
  await page.screenshot({ path: `.impeccable/review/${s.name}.png`, fullPage: true });
  console.log(`captured ${s.name}`);
  await page.close();
}

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 1100 });
await page.goto(base + "/", { waitUntil: "networkidle0", timeout: 60000 });
await strip(page);
await page.evaluate(() => document.querySelector("#playground")?.scrollIntoView());
await new Promise((r) => setTimeout(r, 500));
await strip(page);
await page.screenshot({ path: ".impeccable/review/playground.png" });
console.log("captured playground");
await browser.close();
