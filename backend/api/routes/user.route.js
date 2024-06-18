const { getUsers } = require("../controllers/user.controller");
const { checkAuth } = require("../middlewares/auth.middlewares");

const router = require("express").Router();

router.get("/",  getUsers);

module.exports = router;

//checkAuth,