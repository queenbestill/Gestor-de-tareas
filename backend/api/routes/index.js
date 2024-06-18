const router = require("express").Router();


router.use("/auth", require("./auth.route")); 
router.use("/user", require("./user.route"));
router.use("/unidadfamiliar", require("./unidadFamiliar.route"));
router.use("/tarea", require("./tarea.route"));

module.exports = router;
