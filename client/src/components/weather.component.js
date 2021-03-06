import React, { Component } from 'react';
import axios from 'axios';


export default class Weather extends Component {
    constructor(props) {
        super(props);


        this.state = {
			temperature: '',
			city: 'Ottawa',
			forecast: '',
			location: '',
			icon: ''
        };
	};

	componentDidMount() {
		axios({
			method: 'get',
			url: 'http://localhost:5000/weather?address=Ottawa',
		})
		.then((res) => {
				// console.log(res)
				this.setState({
					temperature: res.data.temp,
					forecast: res.data.weatherStatus,
					location: res.data.location,
					icon: res.data.icon
				});
			}
		)
	}

	render(){
		return(
			<div>
				<h>{this.state.location}</h>
				<img src={this.state.icon} />
			</div>
		);
	};

}
	
