const express = require("express");

const productsRouter = require("./products");
const categoriesRouter = require("./categories");

const indexRouter = express.Router();

indexRouter.use("/", productsRouter);
indexRouter.use("/", categoriesRouter);

module.exports = indexRouter;