const { Router } = require("express");

const favouriteController = require("../controllers/favouriteController");
const checkToken = require("../middleware/checkToken");
const routeNames = require("../constants/routes");

const favouriteRouter = new Router();

favouriteRouter.get(
  routeNames.FAVOURITE,
  favouriteController.getFavouriteItems
);

favouriteRouter.post(
  routeNames.TOGGLE_FAVOURITE,
  checkToken,
  favouriteController.toggleFavourite
);

module.exports = favouriteRouter;
