const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../db");

module.exports = sequelize.define("Message", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  topic: {
    type: DataTypes.STRING,
  },
  message: {
    type: DataTypes.STRING,
    unique: true,
  },
});
