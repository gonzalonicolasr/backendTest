var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var dataRouter = require("./routes/data");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Endpoints
app.use("/api", dataRouter);

app.listen(port);
console.log("Server iniciado en puerto: " + port + "...");
module.exports = app;

module.exports = app;
