const { Router } = require("express");
const routeNames = require("../constants/routes");
const cartController = require("../controllers/cartController");

const cartRouter = new Router();

cartRouter.get(routeNames.CART, cartController.getCart);
cartRouter.post(routeNames.CART_ADD, cartController.addCartItem);
cartRouter.patch(
  routeNames.CHANGE_ITEM_QUANTITY,
  cartController.changeItemQuantity
);

module.exports = cartRouter;
