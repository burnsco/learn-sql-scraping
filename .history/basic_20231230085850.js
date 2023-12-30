const puppeteer = require("puppeteer");
const fs = require("fs");

const scrape = async () => {
  try {
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.goto("https://en.wikipedia.org/wiki/List_of_largest_cities");

    await page.waitForSelector("#pnnext");

    // Gather product title
    const title = await page.$$eval("div.sh-dgr__grid-result h4", (nodes) =>
      nodes.map((n) => n.innerText)
    );

    // Gather price
    const price = await page.$$eval(
      "#mw-content-text > div.mw-content-ltr.mw-parser-output > table.static-row-numbers.plainrowheaders.vertical-align-top.sticky-header.sortable.wikitable.jquery-tablesorter > tbody",
      (nodes) => nodes.map((n) => n.innerText)
    );

    // Consolidate product search data
    const googleShoppingSearchArray = title.slice(0, 10).map((value, index) => {
      return {
        title: title[index],
        price: price[index],
      };
    });
    const jsonData = JSON.stringify(googleShoppingSearchArray, null, 2);
    fs.writeFileSync("googleShoppingSearchResults.json", jsonData);
    // await browser.close();
  } catch (err) {
    console.error(err);
  }
};
scrape();
