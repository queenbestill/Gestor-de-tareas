const User = require("../models/user.model");

async function getUsers(req, res) {
  try {
    const users = await User.findAll();
    if (!users) return res.status(204).send([]);

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
}


async function getUserById(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).send("Not found");
    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function getMyProfileByToken (req, res){
  try {
      
      const user = await User.findByPk(res.locals.user.id)

      if(!user) return res.status(404).send('User not found!')

      res.status(200).json(user)

  } catch (error) {
      res.status(500).send(error)
  }
}

async function createUser(req, res) {
  try {
    const userData = req.body;
    const users = await User.create(userData);
    if (!users) return res.status(204).send([]);
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
}

async function updateUser(req, res) {
  try {
    const [userExist, user] = await User.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    if (userExist !== 0) {
      return res.status(200).json({ message: "User updated", user: user });
    } else {
      return res.status(404).send("User not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteUser(req, res) {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).send("Not found");

    await user.destroy();
    res.status(200).send("User deleted");
  } catch (error) {
    res.status(500).send(error);
  }
}


module.exports = {
  getUsers,
  getOneUser,
  getMyProfileByToken,
  createUser,
  updateUser,
  getUserById,
  deleteUser,
};
