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

    // Gather price
    // const test = await page.$$eval(tbody_cities_container, (nodes) =>
    //   nodes.map((n) => n.querySelectorAll("tr").textContent)
    // );

    let persons = await page.evaluate(() => {
      let cities = document.querySelectorAll("tbody")[2];
      let rows = cities.querySelectorAll("tr");
      for (let row of rows) {
        console.log(row.id);
      }
    });

    console.log(persons);
  } catch (err) {
    console.error(err);
  }
};
scrape();
