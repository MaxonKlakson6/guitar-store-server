const { Router } = require("express");

const routeNames = require("../constants/routes");
const userController = require("../controllers/userController");

const userRouter = new Router();

userRouter.post(
  routeNames.CREATE_UNAUTHORIZED_USER,
  userController.createUnauthorizedUser
);

module.exports = userRouter;
