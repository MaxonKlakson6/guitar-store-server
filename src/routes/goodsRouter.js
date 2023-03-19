const { Router } = require("express");
const routeNames = require("../constants/routes");
const goodsController = require("../controllers/goodsController");

const goodsRouter = new Router();

goodsRouter.get(routeNames.GOODS, goodsController.getAllGoods);

module.exports = goodsRouter;
