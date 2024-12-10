const blacklistTokenModel = require("../models/blacklistToken.model");
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
  const { fullname, email, password } = req.body;
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "Email already exists" });
  }

  const hashPassword = await userModel.hashPassword(password);

  const user = await userService.registerUser({
    fullname,
    email,
    password: hashPassword,
  });
  const token = user.generateAuthToken();
  return res.status(201).json({ user, token });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = user.generateAuthToken();
  res.cookie("token", token);
  return res.status(200).json({ user, token });
};
module.exports.getUserProfile = async (req, res, next) => {
  return res.status(200).json({ user: req.user });
};
module.exports.logoutUser = async (req, res, next) => {
  const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];
  const isTokenBlackListed = await blacklistTokenModel.findOne({ token });
  if (!isTokenBlackListed) {
    await blacklistTokenModel.create({ token: token });
  }
  res.clearCookie("token");
  return res.status(200).json({ message: "User logged out" });
};
