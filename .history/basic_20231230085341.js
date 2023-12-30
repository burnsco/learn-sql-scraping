const assert = require("node:assert");
const { chromium, devices } = require("playwright");

(async () => {
  // Setup
  const browser = await chromium.launch();
  const context = await browser.newContext(devices["iPhone 11"]);
  const page = await context.newPage();

  await page.goto("https://en.wikipedia.org/wiki/List_of_largest_cities");

  assert((await page.title()) === "Example Domain"); // 👎 not a Web First assertion

  // Teardown
  await context.close();
  await browser.close();
})();
