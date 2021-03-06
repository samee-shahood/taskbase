const express = require("express");
let User = require('../models/user.model');
const app = express.Router();
const passport = require("passport");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
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

app.post("/login", (req, res, next) => {
	passport.authenticate("local", (err, user) => {
		if(err){
			return next(err)
		}
		if(!user){
			return res.status(401).send({ success: false, message: 'Invalid Login' });
		}
		req.login(user, () => {
			const body = {_id: user.id, email: user.email }
	
			const token = jwt.sign({user: body}, "jwt_secret")
			return res.json({token})
		})
	})(req, res, next)
})
  
app.get("/secret", passport.authenticate("jwt", { session: false }), (req, res) => {
if(!req.user){
	res.json({
	username: "nobody"
	})
} else {
	res.json(req.user)
}
})

app.get('/logout', function(req, res){
	req.logout();
	return res.json({success: "true"});
});
  

module.exports = app;