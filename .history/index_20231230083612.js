const axios = require("axios");
const cheerio = require("cheerio");

axios
  .get("https://en.wikipedia.org/wiki/List_of_largest_cities")
  .then(({ data }) => {
    const $ = cheerio.load(data);
    const links = $.extract;

    console.log(links);
  });
