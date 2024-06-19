const {
  getUnidadFamiliar,
  createUnidadFamiliar,
  updateUnidadFamiliar,
  deleteUnidadFamiliar,
} = require("../controllers/unidadFamiliar.controller");
const { checkAuth } = require("../middlewares/auth.middlewares");

const router = require("express").Router();

router.get("/:id", getUnidadFamiliar);
router.post("/:id", checkAuth, createUnidadFamiliar); 
router.patch("/:id", checkAuth, updateUnidadFamiliar); 
router.delete("/:id", checkAuth, deleteUnidadFamiliar); 

module.exports = router;
