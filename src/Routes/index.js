const express = require("express");

const productsRouter = require("./products");
const categoriesRouter = require("./categories");
const historiesRouter = require("./histories");

const indexRouter = express.Router();

indexRouter.use("/", productsRouter);
indexRouter.use("/", categoriesRouter);
indexRouter.use("/", historiesRouter);

module.exports = indexRouter;