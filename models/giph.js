const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const giphSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

const Giph = mongoose.model("Giph", giphSchema);

module.exports = Giph;
