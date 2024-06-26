const Tareas = require("../models/tarea.model");
const User = require("../models/user.model");

async function getTareas(req, res) {
  try {
    const tareas = await Tareas.findAll();
    if (!tareas) return res.status(204).send([]);

    res.status(200).json(tareas);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getOneTarea(req, res) {
  try {
    const tarea = await Tareas.findByPk(req.params.id); 
    if (tarea) {
      return res.status(200).json(tarea);
    } else {
      return res.status(404).send("No se ha encontrado la tarea");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function getTareasByUser(req, res) {
  try {
    const user = await User.findByPk(res.locals.user.id);
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }

    const tareas = await Tareas.findAll({ where: { userId: user.id } });
    if (tareas.length > 0) {
      return res.status(200).json(tareas);
    } else {
      return res
        .status(404)
        .send("No se han encontrado tareas asignadas a este usuario");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function createTarea(req, res) {
  try {
    req.body.userId = res.locals.user.id;
    const tarea = await Tareas.create(req.body);
    return res.status(201).json(tarea); 
  } catch (error) {
    console.error("Error al crear la tarea:", error.message);
    return res.status(500).send(error.message); 
  }
}

async function createTareaById(req, res) {
  try {
    const userId = req.user.id; 
    const tareaData = { ...req.body, userId }; 
    const tarea = await Tareas.create(tareaData);
    return res.status(201).json(tarea); 
  } catch (error) {
    console.error("Error al crear la tarea:", error.message);
    return res.status(500).send(error.message);
  }
}

async function updateTarea(req, res) {
  try {
    const [tareaExist, tarea] = await Tareas.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (tareaExist !== 0) {
      return res
        .status(200)
        .json({ message: "La tarea se ha modificado", tarea: tarea });
    } else {
      return res.status(404).send("KHE?! No hemos encontrado la tarea");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteTarea(req, res) {
  try {
    const tarea = await Tareas.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (tarea) {
      return res.status(200).json("Tarea eliminada");
    } else {
      return res.status(404).send("No se ha encontrado la tarea");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getTareas,
  getOneTarea,
  getTareasByUser,
  createTarea,
  createTareaById,
  updateTarea,
  deleteTarea,
};
