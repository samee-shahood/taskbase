const express = require("express");
let User = require('../models/user.model');
const app = express.Router();
const passport = require("passport");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { query } = require("express-validator");
const saltRounds = 10;

app.get("/users", async (req,res) => {
	const users = await User.find();
	return res.json(users);
})

app.post("/users/register", async (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, function (err,   hash) {
		const newUser = new User({
			username : req.body.username,
			email: req.body.email,
			tasks: req.body.tasks,
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

app.post("/users/login", (req, res, next) => {
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
  
app.get("/users/secret", passport.authenticate("jwt", { session: false }), (req, res) => {
if(!req.user){
	res.json({
	username: "nobody"
	})
} else {
	res.json(req.user)
}
})

app.get('/users/logout', function(req, res){
	req.logout();
	return res.json({success: "true"});
});

app.get(
	'/tasks', 
	passport.authenticate("jwt", { session: false }),	
	async function(req, res) {
		const user = await User.findById(req.user.id)
		.catch((err)=>{
			return res.status(400).send(err);
		});

		if(user == undefined){
			return res.status(404).send("User not found");
		}

		if(!req.query.date) {
			return res.send({
				error: 'You must provide an address.'
			})
		}

		let queryDate = new Date(req.query.date);
		// let user = [{
		// 		date: new Date("2021-03-08T00:26:14.078Z"),
		// 		description: "Integrate API",
		// 		title: "i need to unhard code this"
		// 	}
		// ]
		let days = []

		for(var i in user.tasks){
			if((user.tasks[i].date.getMonth() ==  queryDate.getMonth()) && (user.tasks[i].date.getFullYear() ==  queryDate.getFullYear()) && (user.tasks[i].date.getDate() ==  queryDate.getDate()) ){
				days.push(user.tasks[i]);
			}
		}

		res.json({tasks: days});
	}
)
  

module.exports = app;