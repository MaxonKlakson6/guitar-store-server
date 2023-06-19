const { DataTypes } = require("sequelize");

const db = require("../database");

module.exports = db.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  deliveryMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  isReceived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
