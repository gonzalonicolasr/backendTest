var express = require("express");
var fetch = require("node-fetch");
var router = express.Router();

router.get("/", async function (req, res, next) {
  let response = await fetch(
    "https://steamcommunity.com/id/emmik/inventory/json/730/2/",
    {
      method: "GET",
      body: JSON.stringify("Hello World!"),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Host: "https://*.airtableblocks.com",
        Accept: "application/json",
      },
    }
  );
  await res.status(200).send(await response.text());
});

module.exports = router;

console.log(await response.text());
