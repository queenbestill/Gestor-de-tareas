const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../../db");

const Miembro = sequelize.define(
  "Miembro",
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

module.exports = Miembro;
