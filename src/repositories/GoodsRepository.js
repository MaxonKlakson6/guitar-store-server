const { GuitarModel } = require("../models");

class GoodsRepository {
  async getAllGoods() {
    return GuitarModel.findAll();
  }
}

module.exports = new GoodsRepository();
