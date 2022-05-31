const mongoose = require("mongoose");
const validator = require("validator"); // It has functions to validate data
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema(
	{
		userName: {
			type: String,
      		unique: true,
			required: [true, "Please provide name"],
			minlength: 3,
			maxlength: 50
		},
		email: {
			type: String,
			unique: true,
			required: [true, "Please provide email"],
			validate: {
				validator: validator.isEmail,
				message: "Please provide valid email",
			},
		},
		password: {
			type: String,
			required: [true, "Please provide password"],
			minlength: 6,
		},
		role: {
			type: String,
			enum: ["admin", "user"],
			default: "user",
		},
		matches: {
			type: Array,
		},
		dogName: {
			type: String,
			trim: true,
			minlength: [2, "Name can not be less than 2 characters"],
			maxlength: [50, "Name can not be more than 50 characters"],
		},
		breed: {
			type: String,
			minlength: [2, "Breed can not be less than 2 characters"],
			maxlength: [50, "Breed can not be more than 50 characters"],
		},
		gender: {
			type: String,
			enum: {
				values: ["he", "she"],
				message: "{VALUE} is not supported",
			},
		},
		genderInterest: {
			type: String,
			enum: {
				values: ["he", "she", "everyone"],
				message: "{VALUE} is not supported",
			},
		},
		age: {
			type: Number,
		},
		about: {
			type: String,
			maxlength: [1000, "Character can not be more than 1000 characters"],
		},
		url: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
