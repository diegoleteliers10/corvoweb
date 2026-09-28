import puppeteer from "puppeteer-core";

const chromium = process.env.HOME + "/Library/Caches/ms-playwright/chromium-1208/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing";
const browser = await puppeteer.launch({ executablePath: chromium, headless: true, args: ["--no-sandbox", "--hide-scrollbars", "--force-device-scale-factor=1"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 1100 });
await page.goto("http://localhost:4321/", { waitUntil: "networkidle0", timeout: 60000 });
await new Promise((r) => setTimeout(r, 600));
await page.evaluate(() => document.querySelector("astro-dev-toolbar")?.remove());

const snapSection = async (selector, name) => {
  const el = await page.$(selector);
  await el.scrollIntoViewIfNeeded();
  await new Promise((r) => setTimeout(r, 600));
  await page.evaluate(() => document.querySelector("astro-dev-toolbar")?.remove());
  await el.screenshot({ path: `.impeccable/review/section-${name}.png` });
  console.log("captured", name);
};

await snapSection(".hero-shot", "hero-frame");
await snapSection("#workflows .wf-stage", "workflow-frame");
await browser.close();
