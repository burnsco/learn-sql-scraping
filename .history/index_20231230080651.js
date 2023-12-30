const axios = require("axios");
const cheerio = require("cheerio");

const extractLinks = ($) => [
  ...new Set(
    $(".page-numbers a") // Select pagination links
      .map((_, a) => $(a).attr("href")) // Extract the href (url) from each link
      .toArray() // Convert cheerio object to array
  ),
];

axios.get("https://scrapeme.live/shop/").then(({ data }) => {
  const $ = cheerio.load(data); // Initialize cheerio
  const links = extractLinks($);

  console.log(links);
  // ['https://scrapeme.live/shop/page/2/', 'https://scrapeme.live/shop/page/3/', ... ]
});
