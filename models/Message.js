const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  fromUserId: {
    type: String,
  },
  toUserId: {
    type: String,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Message", MessageSchema);
