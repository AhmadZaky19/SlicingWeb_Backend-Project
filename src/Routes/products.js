const express = require("express");
// const middlewareEx = require("../Helpers/Middlewares/example");
const productsController = require("../Controllers/products");

const productsRouter = express.Router();

productsRouter.get("/", productsController.getAllProducts);
productsRouter.post("/", productsController.postNewProduct);
productsRouter.patch("/", productsController.updateProduct);
productsRouter.get("/product/orderbycategory", productsController.getProductByCategory);
productsRouter.get("/product/orderbyprice", productsController.getProductByPrice);
productsRouter.get("/product/orderbynew", productsController.getProductByCreatedAt);
productsRouter.delete("/delete/:id", productsController.deleteProduct);
productsRouter.get("/search/:product", productsController.searchProduct);

module.exports = productsRouter;