const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../../db");

const Estancia = sequelize.define(
  "Estancia",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Estancia;
