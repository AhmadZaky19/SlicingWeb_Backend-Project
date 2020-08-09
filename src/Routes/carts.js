const express = require("express");

const cartsController = require("../Controllers/carts");

const cartsRouter = express.Router();

cartsRouter.get("/", cartsController.getAllCarts);
cartsRouter.post("/", cartsController.postAllCarts);
cartsRouter.patch("/", cartsController.updateCart);
cartsRouter.delete("/", cartsController.deleteAllCart);
cartsRouter.get("/total", cartsController.getSumCarts);
cartsRouter.get("/:id", cartsController.getCartById);
cartsRouter.delete("/delete/:id", cartsController.deleteCartById);

module.exports = cartsRouter;