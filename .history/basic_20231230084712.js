import axios from "axios";

try {
  const { data: html } = await axios.get(
    "https://en.wikipedia.org/wiki/List_of_largest_cities"
  );
} catch (e) {
  console.error(e);
}
