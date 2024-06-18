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

async function getOneUser(req, res) {
  try {
    
  } catch (error) {
    
  }
}

async function createUser(req, res) {
  try {
    
  } catch (error) {
    
  }
}

async function getUserById(req, res) {
  try {
    
  } catch (error) {
    
  }
}

async function deleteUser(req, res) {
  try {
  } catch (error) {
    
  }
}

module.exports = {
  getUsers,
  getOneUser,
  createUser,
  getUserById,
  deleteUser,
};
