const { CartItemModel } = require("../models");
const GoodsRepository = require("./GoodsRepository");

class CartRepository {
  async getCartByUserId(userId) {
    return CartItemModel.findAll({
      where: {
        UserId: userId,
      },
      order: [["createdAt", "ASC"]],
    });
  }

  async getCartItemByVendorCode(vendorCode, UserId) {
    return CartItemModel.findOne({
      where: {
        vendorCode,
        UserId,
      },
    });
  }

  async addCartItem(vendorCode, userId) {
    const product = await GoodsRepository.getProductByVendorCode(vendorCode);
    const cartItem = await this.getCartItemByVendorCode(vendorCode, userId);

    if (cartItem) {
      this.changeItemQuantity(vendorCode, userId, cartItem.quantity + 1);
    } else {
      CartItemModel.create({
        UserId: userId,
        vendorCode: product.vendorCode,
        price: product.price,
        name: product.name,
        image: product.image,
      });
    }
  }

  async changeItemQuantity(vendorCode, userId, quantity) {
    if (quantity <= 0) {
      await CartItemModel.destroy({
        where: {
          vendorCode,
          UserId: userId,
        },
      });
    } else {
      await CartItemModel.update(
        { quantity },
        {
          where: {
            UserId: userId,
            vendorCode,
          },
        }
      );
    }
  }
  async clearCart(UserId) {
    await CartItemModel.destroy({
      where: { UserId },
      truncate: true,
    });
  }
}

module.exports = new CartRepository();
