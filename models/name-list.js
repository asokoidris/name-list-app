const mongoose = require("mongoose");

const nameListItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const NameListItemModel = mongoose.model("NameListItem", nameListItemSchema);

module.exports = NameListItemModel;
