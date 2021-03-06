const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		default: ""
	},
	email: {
		type: String,
		default: ""
	},
	password: {
		type: String,
		default: ""
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model("User", UserSchema);

module.exports = User;