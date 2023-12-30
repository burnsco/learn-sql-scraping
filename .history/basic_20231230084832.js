import axios from "axios"; // or const axios = require('axios');
import { load } from "cheerio"; // const { load } = require('cheerio')

try {
  const { data: html } = await axios.get(
    "https://en.wikipedia.org/wiki/World_Wide_Web"
  );
  const $ = load(html);
  const contents = $('[class="toctext"]')
    .map((_, elem) => $(elem).text())
    .get();
  console.log(contents);
} catch (e) {
  console.error(e);
}
