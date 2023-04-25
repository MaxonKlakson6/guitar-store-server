const GoodsRepository = require("../repositories/GoodsRepository");

class GoodsController {
  async getAllGoods(req, res) {
    const goods = await GoodsRepository.getAllGoods(req.query);
    res.json(goods);
  }
  async getProduct(req, res) {
    try {
      const product = await GoodsRepository.getProductByVendorCode(
        req.query.vendorCode
      );
      res.json(product);
    } catch (error) {
      res.json(null);
    }
  }
}

module.exports = new GoodsController();
