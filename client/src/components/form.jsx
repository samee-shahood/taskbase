import React, { useState, useEffect } from "react";
import * as typeformEmbed from "@typeform/embed";
import axios from 'axios';

const Form = () => {
	const submitForm = (response_id) => {

		popup1.close();
		const options = {
			headers: {
				Authorization: "Bearer " + localStorage.getItem("token")
			}
		};

		console.log(localStorage.getItem("token"));
		axios.get(`http://localhost:5000/api/form/${response_id}`, {headers: {
			Authorization: "Bearer " + localStorage.getItem("token")}
		}
		)
		.then((res) => {
		  console.log(`Succesfully submitted form: ${res}`);
		})
		.catch((res) => {
		  console.log(`Error on form submit: ${res}`);
		})

		popup1.close();

	  };
	const popup1 = typeformEmbed.makePopup(
		"https://uqerxh46o5n.typeform.com/to/PMReobBB",
		{
			mode: "popup",
			autoClose: 3000,
			hideHeaders: true,
			hideFooters: true,
			onSubmit: function(event) {
			submitForm(event.response_id);
			popup1.close();
			}
		}
	)

	function open(value){
		popup1.open()
	}

	return(
		<div>
			<button id="bt-popup" onClick={open}>+Event</button>
		</div>
	)

}

export default Form;
