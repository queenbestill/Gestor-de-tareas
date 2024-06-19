const { getTareas, createTarea, updateTarea, deleteTarea, getOneTarea } = require("../controllers/tarea.controller");

/*const { checkAuth } = require("../middlewares/auth.middlewares");*/

const router = require("express").Router();

router.get("/"/*, checkAuth*/, getTareas);
router.get("/:id", getOneTarea)
router.post("/", createTarea);
router.patch('/:id', updateTarea) // DUDAS DE QUE SE POR ID
router.delete('/:id', deleteTarea) // DUDAS DE QUE SEA POR ID

module.exports = router;
