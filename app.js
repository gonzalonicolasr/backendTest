var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const server = http.createServer(process.env.PORT || 3000);
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/data");
const PORT = process.env.PORT || 8080;
var app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/datos", usersRouter);

app.set("port", PORT);
module.exports = app;
