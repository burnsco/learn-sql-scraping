const axios = require("axios");
const cheerio = require("cheerio");

const extractLinks = ($) => [
  ...new Set(
    $(
      "#mw-content-text > div.mw-content-ltr.mw-parser-output > table.static-row-numbers.plainrowheaders.vertical-align-top.sticky-header.sortable.wikitable.jquery-tablesorter > tbody"
    ) // Select pagination links
      .map((_, a) => $(a).attr("tr")) // Extract the href (url) from each link
      .toArray() // Convert cheerio object to array
  ),
];

axios
  .get("https://en.wikipedia.org/wiki/List_of_largest_cities")
  .then(({ data }) => {
    const $ = cheerio.load(data);
    const links = extractLinks($);

    console.log(links);
  });
