const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  fullName: {
    type: String,
  },
  address: {
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipCode: {
      type: Number,
    },
    country: {
      type: String,
    },
  },
  phoneNumber: {
    type: Number,
  },
});

module.exports = mongoose.model("user", userSchema);
