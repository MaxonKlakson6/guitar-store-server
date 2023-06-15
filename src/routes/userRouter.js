const { Router } = require("express");

const routeNames = require("../constants/routes");
const userController = require("../controllers/userController");
const tokenMiddleware = require("../middleware/checkToken");
const signUpMiddleware = require("../middleware/signUpMiddleware");
const checkToken = require("../middleware/checkToken");

const userRouter = new Router();

userRouter.get(routeNames.GET_USER, tokenMiddleware, userController.getUser);
userRouter.post(
  routeNames.CREATE_UNAUTHORIZED_USER,
  userController.createUnauthorizedUser
);
userRouter.put(
  routeNames.UPDATE_UNAUTHORIZED_USER,
  tokenMiddleware,
  signUpMiddleware,
  userController.updateUnauthorizedUser
);
userRouter.post(routeNames.SIGN_IN, userController.signIn);
userRouter.patch(
  routeNames.UPDATE_USER_INFO,
  checkToken,
  userController.updateUserInformation
);

module.exports = userRouter;
