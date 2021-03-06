const express = require("express");
let User = require('../models/user.model');
const app = express.Router();
const passport = require("passport")
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.post("/users/register", async (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err,   hash) {
		const newUser = new User({
			username : req.body.username,
			email: req.body.email,
			password: hash,
		});

		newUser.save(function(err){
			if(err){
				if (err.name === 'MongoError' && err.code === 11000) {
					return res.status(409).send({ success: false, message: 'User/Email already exist!' });
				}
			
				return res.status(400).send(err);
				}
			res.send(newUser);
		});
	
	});

});

module.exports = app;