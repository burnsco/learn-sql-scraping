var scraper = require("table-scraper");
scraper
  .get("https://en.wikipedia.org/wiki/List_of_largest_cities")
  .then(function (tableData) {
    /*
       tableData ===
        [
          [
            { State: 'Minnesota', 'Capital City': 'Saint Paul', 'Pop.': '3' },
            { State: 'New York', 'Capital City': 'Albany', 'Pop.': 'Eight Million' }
          ]
        ]
    */
  });
