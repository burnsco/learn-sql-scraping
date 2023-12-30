const assert = require("node:assert");
const { chromium, devices } = require("playwright");

(async () => {
  // Setup
  const browser = await chromium.launch();
  const context = await browser.newContext(devices["iPhone 11"]);
  const page = await context.newPage();

  await page.goto("https://en.wikipedia.org/wiki/List_of_largest_cities");

  const tbody = await page.locator(
    "#mw-content-text > div.mw-content-ltr.mw-parser-output > table.static-row-numbers.plainrowheaders.vertical-align-top.sticky-header.sortable.wikitable.jquery-tablesorter > tbody"
  );

  console.log(tbody);

  await context.close();
  await browser.close();
})();
