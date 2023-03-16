const { DataTypes } = require("sequelize");

const db = require("../database");

module.exports = db.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  surname: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  isRegistered: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});
