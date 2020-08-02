const express = require("express");

const middlewareEx = require("../Helpers/Middlewares/example");
const productsController = require("../Controllers/products");

const productsRouter = express.Router();

productsRouter.get("/products", middlewareEx, productsController.getAllProducts);
productsRouter.get("/product/orderbyprice", middlewareEx, productsController.getProductByPrice);
productsRouter.get("/product/orderbycategory", middlewareEx, productsController.getProductByCategory);
productsRouter.get("/product/orderbynew", middlewareEx, productsController.getProductByCreatedAt);
productsRouter.post("/add", middlewareEx, productsController.postNewProduct);
productsRouter.patch("/update", middlewareEx, productsController.updateProduct);
productsRouter.delete("/delete/:id", middlewareEx, productsController.deleteProduct);
productsRouter.get("/search/:product", middlewareEx, productsController.searchProduct);

module.exports = productsRouter;