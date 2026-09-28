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

for (const route of ["download", "releases"]) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1000 });
  await page.goto(`${base}/${route}`, { waitUntil: "networkidle0", timeout: 60000 });
  await new Promise((r) => setTimeout(r, 600));
  await strip(page);
  await page.screenshot({ path: `.impeccable/review/${route}.png`, fullPage: true });
  console.log(`captured ${route}`);
  await page.close();
}

await browser.close();
