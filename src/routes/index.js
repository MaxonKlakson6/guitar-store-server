const { Router } = require("express");

const userRouter = require("./userRouter");
const goodsRouter = require("./goodsRouter");
const cartRouter = require("./cartRouter");
const favouriteRouter = require("./favouriteRouter");
const orderRouter = require("./orderRouter");

const rootRouter = new Router();

rootRouter.use("/", userRouter);
rootRouter.use("/", goodsRouter);
rootRouter.use("/", cartRouter);
rootRouter.use("/", favouriteRouter);
rootRouter.use("/", orderRouter);

module.exports = rootRouter;
