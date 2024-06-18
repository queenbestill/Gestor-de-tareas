const { getTarea } = require("../controllers/tarea.controller");
const { checkAuth } = require("../middlewares/auth.middlewares");

const router = require("express").Router();

router.get("/"/*, checkAuth*/, getTarea);

module.exports = router;
