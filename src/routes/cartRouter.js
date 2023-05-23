const { Router } = require("express");
const routeNames = require("../constants/routes");
const cartController = require("../controllers/cartController");
const tokenMiddleware = require("../middleware/checkToken");

const cartRouter = new Router();

cartRouter.get(routeNames.CART, tokenMiddleware, cartController.getCart);
cartRouter.post(
  routeNames.CART_ADD,
  tokenMiddleware,
  cartController.addCartItem
);
cartRouter.patch(
  routeNames.CHANGE_ITEM_QUANTITY,
  tokenMiddleware,
  cartController.changeItemQuantity
);

module.exports = cartRouter;
