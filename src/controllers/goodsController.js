const GoodsRepository = require("../repositories/GoodsRepository");

class GoodsController {
  async getAllGoods(req, res) {
    const { category } = req.query;
    console.log(category);
    const goods = await GoodsRepository.getAllGoods(category);
    res.json(goods);
  }
}

module.exports = new GoodsController();
