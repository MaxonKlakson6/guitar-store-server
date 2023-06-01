const { FavouriteModel } = require("../models");
const GoodsRepository = require("./GoodsRepository");

class FavouriteRepository {
  async getFavouriteItem(UserId, vendorCode) {
    return FavouriteModel.findOne({
      where: {
        UserId,
        vendorCode,
      },
    });
  }
  async getFavouriteItems(UserId) {
    return FavouriteModel.findAll({
      where: { UserId },
    });
  }
  async toggleFavourite(UserId, vendorCode) {
    const product = await GoodsRepository.getProductByVendorCode(vendorCode);
    const favoriteItem = await this.getFavouriteItem(UserId, vendorCode);

    if (favoriteItem) {
      FavouriteModel.destroy({
        where: {
          UserId,
          vendorCode,
        },
      });
    } else {
      FavouriteModel.create({
        UserId,
        vendorCode: product.vendorCode,
        price: product.price,
        name: product.name,
        image: product.image,
      });
    }
  }
}

module.exports = new FavouriteRepository();
