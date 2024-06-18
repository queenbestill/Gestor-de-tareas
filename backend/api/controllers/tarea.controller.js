const Tareas = require("../models/tarea.model");

async function getTarea(req, res) { //GET ALL USER
  try {
    const tareas = await Tareas.findAll();
    if (!tareas) return res.status(204).send([]);

    res.status(200).json(tareas);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  getTarea,
};
