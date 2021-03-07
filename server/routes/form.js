const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const fetch = require("node-fetch");

router.post("/form/:id", async (req, res) => {
    // unique form submission ID
    const responseID = req.params.id
    console.log(responseID);

    // let user = await User.findOne({discordID: req.user.id});
    // user.responseID = responseID;

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
	//   let task = {
	// 	  elem
	//   }
    //   responses.forEach((elem) => {
    //     if (elem.type == 'text') {
    //       user.name = elem.text;
    //     }
    //     if (elem.type ==  'url') {
    //       user.github = elem.url;
    //     }
    //     if (elem.type == 'choices') {
    //       user.genres = elem.choices.labels;
    //     }
    //   })
	console.log(responses);
    //   user.save();
    });
    }, 1000)

    
    res.send(200);
});

module.exports = router;