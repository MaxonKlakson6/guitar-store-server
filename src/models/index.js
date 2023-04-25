const UserModel = require("./User");
const GuitarModel = require("./Guitar");
const AccessoryModel = require("./Accessory");
const CartItemModel = require("./CartItem");

UserModel.hasMany(CartItemModel);
CartItemModel.belongsTo(UserModel);

module.exports = {
  UserModel,
  GuitarModel,
  AccessoryModel,
  CartItemModel,
};
