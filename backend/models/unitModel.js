const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema({
  unitName: { type: String, required: true, maxlength: 20 },
  userId: { type: String, required: true },
});

module.exports = Unit = mongoose.model("unit", unitSchema);
