var express = require("express");
const fetch = require("node-fetch");
var router = express.Router();

router.get("/", async function (req, res, next) {
  let response = await getWeather();
  await res.status(200).send(response);
});
async function getWeather() {
  const weather = await fetch(
    "https://steamcommunity.com/id/emmik/inventory/json/730/2"
  );
  let response = await weather.json();
  return response;
}
module.exports = router;
