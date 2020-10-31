const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String },
  quantity: { type: Number, required: true },
  unitName: { type: String, required: true, maxlength: 20 },
  categoryName: { type: String, required: true, maxlength: 20 },
  userId: { type: String, required: true },
});

module.exports = Item = mongoose.model("item", itemSchema);
