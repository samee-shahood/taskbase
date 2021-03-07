const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		default: "",
		unique: true,
	},
	email: {
		type: String,
		default: "",
		unique: true
	},
	password: {
		type: String,
		default: ""
	},
	tasks: [
		{
			title: {type: String, required: true},
			description: {type: String, required: true},
			date: {type: Date, required:true},
		}
	],
	date: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;