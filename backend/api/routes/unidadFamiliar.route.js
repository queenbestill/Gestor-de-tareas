const {
  getUnidadFamiliar,
  createUnidadFamiliar,
  updateUnidadFamiliar,
  deleteUnidadFamiliar,
} = require("../controllers/unidadFamiliar.controller");
const { checkAuth } = require("../middlewares/auth.middlewares");

const router = require("express").Router();

router.get("/", getUnidadFamiliar);
router.post("/", checkAuth, createUnidadFamiliar); 
router.put("/:id", checkAuth, updateUnidadFamiliar); 
router.delete("/:id", checkAuth, deleteUnidadFamiliar); 

module.exports = router;
