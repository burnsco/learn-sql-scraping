var scraper = require("table-scraper");
scraper
  .get("https://en.wikipedia.org/wiki/List_of_largest_cities")
  .then(function (tableData) {
    console.log(tableData);
  });
