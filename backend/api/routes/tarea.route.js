const { getTareas, createTarea, createTareaById, updateTarea, deleteTarea, getOneTarea, getTareasByUser } = require("../controllers/tarea.controller");

const { checkAuth } = require("../middlewares/auth.middlewares");

const router = require("express").Router();

router.get("/"/*, checkAuth*/, getTareas);
router.get('/mistareas', checkAuth, getTareasByUser )
router.get("/:id", getOneTarea)
router.post("/", createTarea);
router.post("/createbyid", checkAuth, createTareaById);
router.patch('/:id', updateTarea) // DUDAS DE QUE SE POR ID
router.delete('/:id', deleteTarea) // DUDAS DE QUE SEA POR ID

module.exports = router;

//tenemos que crear EN ALGUN SITIO  una funcion en la que el usuario pueda CREAR UNA UNIDAD FAMILIAR
