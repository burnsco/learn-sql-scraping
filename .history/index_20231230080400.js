var scraper = require("table-scraper");
scraper.get("http://www.some-fake-url.com").then(function (tableData) {
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
