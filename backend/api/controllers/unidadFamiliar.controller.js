const UnidadFamiliar = require("../models/unidadFamiliar.model");

async function getUnidadFamiliar(req, res) {
  try {
    const unidadFamiliar = await UnidadFamiliar.findAll();
    if (!unidadFamiliar) return res.status(204).send([]);

    res.status(200).json(unidadFamiliar);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getUnidadFamiliar,
};
