const Sequelize = require("sequelize");
// import { DataTypes } from "sequelize";
const sequelize = require("../util/database");

const Product = sequelize.define("product", {
  id: {
    // type: Sequelize.DataTypes.INTEGER,

    // type: Sequelize.INTEGER,
    type: Sequelize.DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    // allowNull: false,

    // primaryKey: true,
    // autoIncrement: true,
    // type: Sequelize.INTEGER,
    // autoIncrement: true,
    // allowNull: false,
    // primaryKey: true
  },
  title: Sequelize.STRING,
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Product;
