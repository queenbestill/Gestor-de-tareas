const {
  getTareas,
  createTarea,
  createTareaById,
  updateTarea,
  deleteTarea,
  getOneTarea,
  getTareasByUser,
} = require("../controllers/tarea.controller");

const { checkAuth } = require("../middlewares/auth.middlewares");

const router = require("express").Router();

router.get("/" /*, checkAuth*/, getTareas);
router.get("/mistareas", checkAuth, getTareasByUser);
router.get("/:id", getOneTarea);
router.post("/", checkAuth, createTarea);
router.post("/createbyid", checkAuth, createTareaById);
router.patch('/:id', updateTarea) 
router.delete('/:id', deleteTarea) 

module.exports = router;

