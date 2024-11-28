const userModel = require("../models/user.model");

module.exports.registerUser = async ({ username, email, password }) => {
  // Validate input fields
  if (!username || !email || !password) {
    throw new Error("Please provide all the fields");
  }
  // Create a new user
  const user = await userModel.create({
    fullName: {
      firstname: username.firstname,
      lastname: username.lastname,
    },
    email,
    password,
  });
  return user;
};
