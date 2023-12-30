const axios = require("axios");

axios.get("https://scrapeme.live/shop/").then(({ data }) => console.log(data));
