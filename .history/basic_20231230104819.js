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
      "#mw-content-text > div.mw-content-ltr.mw-parser-output > table.static-row-numbers.plainrowheaders.vertical-align-top.sticky-header.sortable.wikitable.jquery-tablesorter > tbody"
    );
    const rows = await tbody.$$("tr");

    // <tbody>
    // <tr></tr>
    // <tr></tr>
    // <tr></tr>
    // <tr></tr>
    // I want to map or iterate or whatever through each <tr></tr>
    // the first item is the id which is the City ie Tokyo
    // the 2nd item is the Country (ie. Japan)
  } catch (err) {
    console.error(err);
  }
};
scrape();
