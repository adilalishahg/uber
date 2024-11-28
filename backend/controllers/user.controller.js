const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } = require("express-validator");
module.exports.registerUser = async (req, res, next) => {
  // return res.json(req);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  // console.log(req.body);
  // return;
  const { username, email, password } = req.body;

  const hashPassword = await userModel.hashPassword(password);

  const user = await userService.registerUser({
    username,
    email,
    password: hashPassword,
  });
  const token = user.generateAuthToken();
  return res.status(201).json({ user, token });
};
