const mongoose = require("mongoose");

const AuthorSchema = mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
});

module.exports = mongoose.model("Authors", AuthorSchema);