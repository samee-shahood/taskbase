const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const fetch = require("node-fetch");
const passport = require("passport");


router.get(
	"/form/:id", 
	passport.authenticate("jwt", { session: false }),
	async (req, res) => {
		// unique form submission ID
		const responseID = req.params.id

		const user = await User.findById(req.user.id)
		.catch((err)=>{
			return res.status(400).send(err);
		});

		if(user == undefined){
			return res.status(404).send("User not found");
		}

		const token = "CPFGBMMq987qT4f9SNDqBLfZSFjd17dTsQwEYwKqXqiJ";

		setTimeout(() => {
		fetch('https://api.typeform.com/forms/PMReobBB/responses?' + new URLSearchParams({
		included_response_ids: responseID,
		}), {
				method: 'GET',
				headers: {
				'authorization': `bearer ${token}`
		}}).then(res => res.json())
		.then(resJson => {
		const responses = resJson.items[0].answers;
		let task = {};
		responses.forEach((elem) => {
			if (elem.field.type == 'short_text') {
				task.title = elem.text;
			}
			if (elem.field.type == 'long_text') {
				task.description = elem.text;
			}
			if (elem.type == 'date') {
				task.date = new Date(elem.date.replace(/-/g, '\/').replace(/T.+/, ''));
			}
		})
			user.tasks.push(task);
		  	user.save();
		});
		}, 1000)

		
		res.send(200);
});

module.exports = router;