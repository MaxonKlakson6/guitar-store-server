const CartRepository = require("../repositories/CartRepository");
const getTokenData = require("../helpers/getTokenData");

class CartController {
  async getCart(req, res) {
    const { id } = getTokenData(req.headers.authorization);
    const cart = await CartRepository.getCartByUserId(id);
    res.json(cart);
  }

  async addCartItem(req, res) {
    const { vendorCode } = req.body;
    const { id } = getTokenData(req.headers.authorization);
    await CartRepository.addCartItem(vendorCode, id);
    res.json("ok");
  }

  async changeItemQuantity(req, res) {
    const { vendorCode, quantity } = req.body;
    const { id } = getTokenData(req.headers.authorization);
    await CartRepository.changeItemQuantity(vendorCode, id, quantity);
    res.json("ok");
  }
}

module.exports = new CartController();
