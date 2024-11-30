const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const captainSchema = new mongoose.Schema({
  fullName: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "First name must be of 3 characters "],
    },
    lastname: {
      type: String,
      minlength: [3, "Last name must be of 3 characters "],
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    default: "inactive",
    enum: ["active", "inactive"],
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minlength: [3, "Color must be of 3 characters "],
    },
    model: {
      type: String,
      required: true,
    },
    plateNumber: {
      type: String,
      required: true,
      minlength: [3, "Plate number must be of 3 characters "],
    },
    capacity: {
      type: Number,
      required: true,
      min: [1, "Capacity must be a positive integer"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["car", "motorcycle", "bicycle"],
    },
    location: {
      lat: {
        type: Number,
      },
      lng: {
        type: Number,
      },
    },
  },
});

captainSchema.methods.generateAuthToken = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

captainSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};
module.exports = mongoose.model("Captain", captainSchema);
