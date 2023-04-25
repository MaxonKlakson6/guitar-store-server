const { Router } = require("express");

const userRouter = require("./userRouter");
const goodsRouter = require("./goodsRouter");
const cartRouter = require("./cartRouter");

const rootRouter = new Router();

rootRouter.use("/", userRouter);
rootRouter.use("/", goodsRouter);
rootRouter.use("/", cartRouter);

module.exports = rootRouter;
