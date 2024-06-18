const { getUnidadFamiliar } = require("../controllers/unidadFamiliar.controller");
const { checkAuth } = require("../middlewares/auth.middlewares");

const router = require("express").Router();

router.get("/", getUnidadFamiliar);

module.exports = router;
