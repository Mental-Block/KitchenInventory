const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, lowercase: true, unique: true },
  password: { type: String, required: false, minlength: 8 },
  displayName: { type: String },
});

module.exports = User = mongoose.model("user", userSchema);
