const express = require("express");
const router = express.Router(); // Corrected here

const { body } = require("express-validator");
const userController = require("../controllers/user.controller");
router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Please enter a valid email"),
    body("username.firstname")
      .isLength({ min: 3 })
      .withMessage("Please enter a valid firstname"),
    body("password")
      .isLength({ min: 3 })
      .withMessage("Please enter a valid password"),
  ],
  userController.registerUser
);

module.exports = router;
