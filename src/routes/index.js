const { Router } = require("express");

const userRouter = require("./userRouter");
const goodsRouter = require("./goodsRouter");

const rootRouter = new Router();

rootRouter.use("/", userRouter);
rootRouter.use("/", goodsRouter);

module.exports = rootRouter;
