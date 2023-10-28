const UserModel = require("../Model/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { name, email, password, cnf_password } = req.body;

  if(password != cnf_password){
    return res.status(500).send("The two passwords does not match")
  }

  const user = await UserModel.findOne({email:email});

  if(user){
    
  }
  res.send("Register User");
};

const loginUser = async (req, res) => {
  res.send("Login User");
};

module.exports = {
  registerUser,
  loginUser,
};
