const CartRepository = require("../repositories/CartRepository");
const OrderRepository = require("../repositories/OrderRepository");
const getTokenData = require("../helpers/getTokenData");

class OrderController {
  async getOrders(req, res) {
    const { id } = getTokenData(req.headers.authorization);
    const orders = await OrderRepository.findOrdersByUserId(id);
    res.json(orders);
  }
  async makeOrder(req, res) {
    const { id } = getTokenData(req.headers.authorization);

    await OrderRepository.createOrder(id, req.body);
    await CartRepository.clearCart(id);
    res.json("Спасибо, заказ оформлен, с вами свяжуться");
  }
}

module.exports = new OrderController();
