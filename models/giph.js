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

const Giph = mongoose.model("giphs", giphSchema);

module.exports = Giph;
