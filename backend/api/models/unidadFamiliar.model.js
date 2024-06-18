const { DataTypes } = require("sequelize");
const sequelize = require("../../db"); 

const UnidadFamiliar = sequelize.define(
  "UnidadFamiliar",
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

module.exports = UnidadFamiliar;
