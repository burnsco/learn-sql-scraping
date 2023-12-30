const puppeteer = require("puppeteer");
const fs = require("fs");

const tbody_cities_container =
  "#mw-content-text > div.mw-content-ltr.mw-parser-output > table.static-row-numbers.plainrowheaders.vertical-align-top.sticky-header.sortable.wikitable.jquery-tablesorter > tbody";

const scrape = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/List_of_largest_cities");

    // Gather price
    const test = await page.$$eval(tbody_cities_container, (nodes) =>
      nodes.map((n) => n.innerText)
    );

    console.log(test);
  } catch (err) {
    console.error(err);
  }
};
scrape();
