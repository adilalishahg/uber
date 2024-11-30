const { validationResult } = require("express-validator");
const captainModel = require("../models/captain.model.js");
const captainService = require("../services/captain.service.js");

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
  const Captain = await captainService.captainRegisterService({
    firstname: firstname,
    lastname: lastname,
    email,
    password: hashPassword,
    color: vehicle.color,
    model: vehicle.model,
    plate: vehicle.plate,
    capacity: vehicle.capacity,
    vehicleType: vehicle.vehicleType,
  });
  const token = await captainModel.generateAuthToken;
  res.status(201).json({
    message: "Captain registered successfully",
    Captain,
    token,
  });
};
