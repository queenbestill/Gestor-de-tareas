const UnidadFamiliar = require("../models/unidadFamiliar.model");

async function getUnidadFamiliar(req, res) {
  try {
    const unidadFamiliar = await UnidadFamiliar.findByPk(req.params.id);
    if (!unidadFamiliar) return res.status(204).send([]);

    res.status(200).json(unidadFamiliar);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function createUnidadFamiliar(req, res) {
  try {
    const { nombre, estancias, miembros } = req.body;
    const nuevaUnidadFamiliar = await UnidadFamiliar.create(nombre,
      areas: JSON.stringify(areas),
      miembros: JSON.stringify(miembros);

    if (!nombre || !estancias.length || !miembros.length)
      return res
        .status(400)
        .json({ message: "Todos los campos son requeridos" });
    res.status(201).json(nuevaUnidadFamiliar);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function updateUnidadFamiliar(req, res) {
  try {
    const { id } = req.params;
    const { nombre } = req.body;
    if (!nombre)
      return res.status(400).json({ message: "Nombre es requerido" });

    const unidadFamiliar = await UnidadFamiliar.findByPk(id);
    if (!unidadFamiliar)
      return res.status(404).json({ message: "Unidad Familiar no encontrada" });

    unidadFamiliar.nombre = nombre;
    await unidadFamiliar.save();

    res.status(200).json(unidadFamiliar);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function deleteUnidadFamiliar(req, res) {
  try {
    const { id } = req.params;

    const unidadFamiliar = await UnidadFamiliar.findByPk(id);
    if (!unidadFamiliar)
      return res.status(404).json({ message: "Unidad Familiar no encontrada" });

    await unidadFamiliar.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getUnidadFamiliar,
  createUnidadFamiliar,
  updateUnidadFamiliar,
  deleteUnidadFamiliar,
};