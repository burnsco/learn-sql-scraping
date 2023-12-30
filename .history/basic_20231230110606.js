const puppeteer = require("puppeteer");
const fs = require("fs");

const tbody_cities_container =
  "#mw-content-text > div.mw-content-ltr.mw-parser-output > table.static-row-numbers.plainrowheaders.vertical-align-top.sticky-header.sortable.wikitable.jquery-tablesorter > tbody";

const scrape = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/List_of_largest_cities");

    await page.waitForSelector(tbody_cities_container);

    // this container has all the columns and rows with all the infomation we need
    const tbody = await page.$(
      "#mw-content-text > div.mw-content-ltr.mw-parser-output > table.static-row-numbers.plainrowheaders.vertical-align-top.sticky-header.sortable.wikitable.jquery-tablesorter > tbody > tr"
    );

    //
    const rows = await tbody.$$("th");

    let result = [];

    let result2 = await Promise.all(
      rows.map(async (t) => await t.evaluate((x) => x.innerText))
    );
    console.log(result2);
  } catch (err) {
    console.error(err);
  }
};
scrape();
