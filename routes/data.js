var express = require("express");
var router = express.Router();
var request = require("request");

router.get("/*", function (req, res, next) {
  var url = req.params[0];

  request(
    {
      uri: "http://" + url,
    },
    function (error, response, body) {
      var obj = {};
      obj = body;
      res.status(200).send(body);
    }
  );
});

module.exports = router;
