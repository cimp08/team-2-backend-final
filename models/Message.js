const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
	{ timestamps: true },
	{
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
	}
);

module.exports = mongoose.model("Message", MessageSchema);
