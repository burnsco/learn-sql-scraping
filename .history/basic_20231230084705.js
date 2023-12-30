import axios from "axios";
import * as cheerio from "cheerio";

try {
  const { data: html } = await axios.get();
} catch (e) {
  console.error(e);
}
