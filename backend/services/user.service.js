const userModel = require("../models/user.model");

module.exports.registerUser = async ({ fullname, email, password }) => {
  // Validate input fields
  if (!fullname || !email || !password) {
    throw new Error("Please provide all the fields");
  }
  // Create a new user
  const user = await userModel.create({
    fullName: {
      firstname: fullname.firstname,
      lastname: fullname.lastname,
    },
    email,
    password,
  });
  return user;
};
