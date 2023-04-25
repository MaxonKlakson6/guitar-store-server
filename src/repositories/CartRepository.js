const { CartItemModel } = require("../models");
const GoodsRepository = require("./GoodsRepository");

class CartRepository {
  async getCartByUserId(userId) {
    return CartItemModel.findAll({
      where: {
        UserId: userId,
      },
    });
  }

  async addCartItem(vendorCode, userId) {
    const product = await GoodsRepository.getProductByVendorCode(vendorCode);
    CartItemModel.create({
      UserId: userId,
      vendorCode: product.vendorCode,
      price: product.price,
      name: product.name,
      image: product.image,
    });
  }
}

module.exports = new CartRepository();
