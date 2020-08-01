const express = require("express");
const bodyParser = require("body-parser"); 
const logger = require("morgan");
const indexRouter = require("./src/Routes/index");

const app = express();

const port = 8000;
app.listen(port, () => {
    console.log(`Server is Running at ${port}`);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));

app.use(indexRouter);