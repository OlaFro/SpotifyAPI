const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const apiRouter = require("./routes/api");

require("dotenv").config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(morgan("tiny"));

app.use("/api", apiRouter);

app.listen(PORT, console.log(`Server is listening to port ${PORT}`));