const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model.js");
const captainService = require("../services/captain.service.js");
const blacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { fullname, email, password, vehicle } = req.body;
  const isEmailAlreadyExist = await captainModel.findOne({ email });
  if (isEmailAlreadyExist) {
    return res.status(400).json({ error: "Email already exists" });
  }
  const hashPassword = await captainModel.hashPassword(password);
  const { firstname, lastname } = fullname;
  const newCaptainData = {
    firstname: firstname,
    lastname: lastname,
    email,
    password: hashPassword,
    color: vehicle.color,
    model: vehicle.plate,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.type,
  };
  console.log(newCaptainData);
  const Captain = await captainService.captainRegisterService(newCaptainData);
  const token = await captainModel.generateAuthToken;
  res.status(201).json({
    message: "Captain registered successfully",
    Captain,
    token,
  });
};
module.exports.loginCaptain = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  const { email, password } = req.body;
  const Captain = await captainModel.findOne({ email }).select("+password");
  if (!Captain) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const isMatch = await Captain.comparePassword(password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid email or password" });
  }
  const token = await Captain.generateAuthToken();
  res.cookie("token", token);
  return res.status(200).json({ Captain, token });
};
module.exports.getCaptainProfile = async (req, res) => {
  res.status(200).json({ captain: req.captain });
};
module.exports.logoutCaptain = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  await blacklistTokenModel.create({ token });
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
};
