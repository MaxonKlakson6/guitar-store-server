const FavouriteRepository = require("../repositories/FavouriteRepository");
const getTokenData = require("../helpers/getTokenData");

class FavouriteController {
  async getFavouriteItems(req, res) {
    const { id } = getTokenData(req.headers.authorization);
    const favoriteItems = await FavouriteRepository.getFavouriteItems(id);
    res.json(favoriteItems);
  }

  async toggleFavourite(req, res) {
    const { id } = getTokenData(req.headers.authorization);
    await FavouriteRepository.toggleFavourite(id, req.body.vendorCode);
    res.json("ok");
  }
}

module.exports = new FavouriteController();
