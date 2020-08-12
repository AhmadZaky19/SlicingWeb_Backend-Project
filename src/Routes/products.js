const express = require("express");
// const middlewareEx = require("../Helpers/Middlewares/example");
const productsController = require("../Controllers/products");

const productsRouter = express.Router();

productsRouter.get("/", productsController.getAllProducts);
productsRouter.post("/", productsController.postNewProduct);
productsRouter.patch("/", productsController.updateProduct);
productsRouter.get("/sortproductby", productsController.sortProductBy);
productsRouter.delete("/delete/:id", productsController.deleteProduct);
productsRouter.get("/search", productsController.searchProduct);

module.exports = productsRouter;