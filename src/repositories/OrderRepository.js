const { OrderModel } = require("../models");

class OrderRepository {
  async findOrdersByUserId(userId) {
    return OrderModel.findAll({
      where: {
        UserId: userId,
      },
    });
  }
  async createOrder(userId, orderData) {
    await OrderModel.create({
      UserId: userId,
      ...orderData,
    });
  }
}

module.exports = new OrderRepository();
