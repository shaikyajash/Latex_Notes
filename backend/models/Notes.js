const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  content: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Note", noteSchema);



