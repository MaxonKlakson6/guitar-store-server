const { Router } = require("express");

const userRouter = require("./userRouter");

const rootRouter = new Router();

rootRouter.use("/", userRouter);

module.exports = rootRouter;
