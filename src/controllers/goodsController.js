const GoodsRepository = require("../repositories/GoodsRepository");

class GoodsController {
  async getAllGoods(req, res) {
    const goods = await GoodsRepository.getAllGoods();
    res.json(goods);
  }
}

module.exports = new GoodsController();
