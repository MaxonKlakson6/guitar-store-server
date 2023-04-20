const Sequelize = require("sequelize");
const { GuitarModel, AccessoryModel } = require("../models");

class GoodsRepository {
  async getAllGoods(queryParams) {
    let guitars = [];
    let accessories = [];
    const material = JSON.parse(queryParams.material);
    const stringQuantity = JSON.parse(queryParams.stringQuantity);
    const color = JSON.parse(queryParams.color);
    const type = JSON.parse(queryParams.type);
    const minPrice = Number(queryParams.minPrice);
    const maxPrice = Number(queryParams.maxPrice) || Number.MAX_VALUE;

    if (queryParams.category === "all") {
      guitars = await GuitarModel.findAll({
        where: {
          price: {
            [Sequelize.Op.between]: [minPrice, maxPrice],
          },
          material: {
            [Sequelize.Op.or]: material,
          },
          stringQuantity: {
            [Sequelize.Op.or]: stringQuantity,
          },
          color: {
            [Sequelize.Op.or]: color,
          },
        },
        order: [["price", queryParams.sortBy]],
      });
      accessories = await AccessoryModel.findAll({
        where: {
          price: {
            [Sequelize.Op.between]: [minPrice, maxPrice],
          },
        },
        order: [[["price", queryParams.sortBy]]],
      });
    } else if (queryParams.category === "аксессуары") {
      accessories = await AccessoryModel.findAll({
        where: {
          price: {
            [Sequelize.Op.between]: [minPrice, maxPrice],
          },
          type: {
            [Sequelize.Op.or]: type,
          },
        },
        order: [["price", queryParams.sortBy]],
      });
    } else {
      guitars = await GuitarModel.findAll({
        where: {
          category: queryParams.category,
          price: {
            [Sequelize.Op.between]: [minPrice, maxPrice],
          },
          material: {
            [Sequelize.Op.or]: material,
          },
          stringQuantity: {
            [Sequelize.Op.or]: stringQuantity,
          },
          color: {
            [Sequelize.Op.or]: color,
          },
        },
        order: [["price", queryParams.sortBy]],
      });
    }

    return {
      guitars,
      accessories,
    };
  }

  async getProductByVendorCode(vendorCode) {
    let product;

    if (vendorCode < 500) {
      product = await GuitarModel.findOne({
        where: {
          vendorCode,
        },
      });
    } else {
      product = await AccessoryModel.findOne({
        where: {
          vendorCode,
        },
      });
    }

    return product;
  }
}

module.exports = new GoodsRepository();
