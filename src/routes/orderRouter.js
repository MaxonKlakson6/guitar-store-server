const { Router } = require("express");
const routeNames = require("../constants/routes");
const orderController = require("../controllers/orderController");
const checkToken = require("../middleware/checkToken");

const orderRouter = new Router();

orderRouter.get(routeNames.GET_ORDERS, checkToken, orderController.getOrders);
orderRouter.post(routeNames.MAKE_ORDER, checkToken, orderController.makeOrder);

module.exports = orderRouter;
