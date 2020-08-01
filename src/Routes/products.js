const express = require("express");
const productsController = require("../Controllers/products");

const productsRouter = express.Router();

productsRouter.get("/products", productsController.getAllProducts);
productsRouter.get("/product/orderbyprice", productsController.getProductByPrice);
productsRouter.get("/product/orderbycategory", productsController.getProductByCategory);
productsRouter.get("/product/orderbynew", productsController.getProductByCreatedAt);
productsRouter.post("/add", productsController.postNewProduct);
productsRouter.patch("/update", productsController.updateProduct);
productsRouter.delete("/delete/:id", productsController.deleteProduct);
productsRouter.get("/search/:product", productsController.searchProduct);

module.exports = productsRouter;