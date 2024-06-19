const { getUsers, getOneUser, createUser, deleteUser, updateUser } = require("../controllers/user.controller");
const { checkAuth } = require("../middlewares/auth.middlewares");

const router = require("express").Router();

router
  .get("/", getUsers)
  .get("/myprofile", checkAuth, getOneUser)
  .post("/", createUser)
  .put("/id", updateUser)
  .delete("/:id", deleteUser);


module.exports = router;

//checkAuth,