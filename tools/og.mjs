import puppeteer from "puppeteer-core";

const chromium = process.env.HOME + "/Library/Caches/ms-playwright/chromium-1208/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing";
const browser = await puppeteer.launch({ executablePath: chromium, headless: true, args: ["--no-sandbox", "--hide-scrollbars", "--force-device-scale-factor=1"] });
const page = await browser.newPage();
await page.setViewport({ width: 1200, height: 630 });
await page.goto("file:///Users/dleteliers/Dev/corvoweb/tools/og-card.html", { waitUntil: "networkidle0", timeout: 30000 });
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: "public/og-image.png" });
console.log("og captured");
await browser.close();
