const { GuitarModel, AccessoryModel } = require("../models");
const { guitars, accessories } = require("../mock/goods");

module.exports = () => {
  guitars.forEach(({ id, ...otherFields }) => {
    GuitarModel.create({ vendorCode: id, ...otherFields });
  });
  accessories.forEach(({ id, ...otherFields }) => {
    AccessoryModel.create({ vendorCode: id, ...otherFields });
  });
};
