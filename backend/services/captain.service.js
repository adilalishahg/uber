const captainModel = require("../models/captain.model");

module.exports.captainRegisterService = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  plate,
  model,
  capacity,
  vehicleType,
}) => {
  if (
    !firstname ||
    !lastname ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !model ||
    !capacity ||
    !vehicleType
  ) {
    throw new Error("All fields are required");
  }
  const captain = await captainModel.create({
    fullName: {
      firstname,
      lastname,
    },
    email,
    password,
    vehicle: {
      color,
      plateNumber: plate,
      capacity,
      model,
      vehicleType,
    },
  });
  return captain;
};
