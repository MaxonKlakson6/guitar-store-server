const { GuitarModel, AccessoryModel } = require("../models");

class GoodsRepository {
  async getAllGoods(category) {
    let guitars = [];
    let accessories = [];

    if (category === "all") {
      guitars = await GuitarModel.findAll();
      accessories = await AccessoryModel.findAll();
    } else if (category === "аксессуары") {
      accessories = await AccessoryModel.findAll();
    } else {
      guitars = await GuitarModel.findAll({ where: { category } });
    }

    return {
      guitars,
      accessories,
    };
  }
}

module.exports = new GoodsRepository();
