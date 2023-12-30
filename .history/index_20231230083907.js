const axios = require("axios");
import * as cheerio from "cheerio";

axios
  .get("https://en.wikipedia.org/wiki/List_of_largest_cities")
  .then(({ data }) => {
    const $ = cheerio.load(data);
    console.log($('title').text()_)
  });
