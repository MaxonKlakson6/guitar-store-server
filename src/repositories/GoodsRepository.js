const { GuitarModel, AccessoryModel } = require("../models");

class GoodsRepository {
  async getAllGoods() {
    const guitars = await GuitarModel.findAll();
    const accessories = await AccessoryModel.findAll();
    return {
      guitars,
      accessories,
    };
  }
}

module.exports = new GoodsRepository();
