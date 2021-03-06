import React, { Component } from 'react';
import axios from 'axios';


class Weather extends Component {
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
			url: '/weather?address='+this.city,
		})
		.then((res) =>
			this.setState({
				temperature: res.temp,
				forecast: res.weatherStatus,
				location: res.location
			})
		)
	}

	render(){

	};

}
	
