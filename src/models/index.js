const UserModel = require("./User");
const GuitarModel = require("./Guitar");
const AccessoryModel = require("./Accessory");
const CartItemModel = require("./CartItem");
const FavouriteModel = require("./Favourite");
const OrderModel = require("./Order");

UserModel.hasMany(CartItemModel);
CartItemModel.belongsTo(UserModel);

UserModel.hasMany(FavouriteModel);
FavouriteModel.belongsTo(UserModel);

UserModel.hasMany(OrderModel);
OrderModel.belongsTo(UserModel);

module.exports = {
  UserModel,
  GuitarModel,
  AccessoryModel,
  CartItemModel,
  FavouriteModel,
  OrderModel,
};
