import puppeteer from "puppeteer-core";

const chromium = process.env.HOME + "/Library/Caches/ms-playwright/chromium-1208/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing";
const browser = await puppeteer.launch({ executablePath: chromium, headless: true, args: ["--no-sandbox", "--hide-scrollbars", "--force-device-scale-factor=1"] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 1100 });
await page.goto("http://localhost:4321/", { waitUntil: "networkidle0", timeout: 60000 });
await page.evaluate(() => {
  document.querySelector("astro-dev-toolbar")?.remove();
  document.querySelector("#playground")?.scrollIntoView();
});
await new Promise((r) => setTimeout(r, 400));

const snap = async (name) => {
  await page.evaluate(() => document.querySelector("astro-dev-toolbar")?.remove());
  await page.screenshot({ path: `.impeccable/review/replica-${name}.png` });
  const check = await page.evaluate(() => {
    const row = document.querySelector("#corvo-rows-list .pl-row");
    return row ? getComputedStyle(row).minHeight : "missing";
  });
  console.log(name, "row minHeight:", check);
};

const clearInput = () => page.evaluate(() => {
  const i = document.getElementById("corvo-launcher-input");
  i.value = "";
  i.dispatchEvent(new Event("input", { bubbles: true }));
});

await snap("empty");

// chip: safari
await page.click('.pl-chips .pl-chip[data-query="safari"]');
await new Promise((r) => setTimeout(r, 250));
await snap("safari");

// chip: 24 * 7 (arithmetic path)
await page.click('.pl-chips .pl-chip[data-query="24 * 7"]');
await new Promise((r) => setTimeout(r, 250));
await snap("247");

// type 1+1 manually
await page.click("#corvo-launcher-input");
await page.type("#corvo-launcher-input", "1+1");
await new Promise((r) => setTimeout(r, 250));
await snap("typed-calc");

// back to empty
await clearInput();
await new Promise((r) => setTimeout(r, 250));
await snap("cleared");

// chip: emoji (grid view)
await page.click('.pl-chips .pl-chip[data-query="emoji"]');
await new Promise((r) => setTimeout(r, 250));
await snap("emoji");

// leave emoji via typing an app name
await clearInput();
await page.type("#corvo-launcher-input", "zed");
await new Promise((r) => setTimeout(r, 250));
await snap("emoji-exit");

await browser.close();
console.log("done");
