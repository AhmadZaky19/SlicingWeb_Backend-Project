const express = require("express");

const productsRouter = require("./products");
const categoriesRouter = require("./categories");
const historiesRouter = require("./histories");
const cartsRouter = require("./carts");

const indexRouter = express.Router();

indexRouter.use("/", productsRouter);
indexRouter.use("/", categoriesRouter);
indexRouter.use("/", historiesRouter);
indexRouter.use("/carts", cartsRouter);

module.exports = indexRouter;