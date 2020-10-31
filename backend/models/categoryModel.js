const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoryName: { type: String, required: true, maxlength: 20 },
  userId: { type: String, required: true },
});

module.exports = Category = mongoose.model("category", categorySchema);
