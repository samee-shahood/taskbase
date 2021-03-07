import React, { Component } from 'react';
import axios from 'axios';
import { Card, ListGroup, Col, Row } from 'react-bootstrap';
import "./dashboard.css";

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
				  
									
				{/* <Card style={{ width: '18rem' }}> */}
					<Card.Body>
						<Row className="justify-content-md-center">
							<Col md={7}>													
								<Card.Title>{this.state.location}</Card.Title>
								<Row>
									<Col md={3}>
										<img src={this.state.icon} />
									</Col>

									<Col>
										<Card.Text id="WeatherDesc">
											{this.state.forecast}
										</Card.Text>
									</Col>
								</Row>
							</Col>
							<Col xs={1}></Col>
							<Col>
								<Card.Title id="temp">{this.state.temperature} °C</Card.Title>
							</Col>
						</Row>
					</Card.Body>
		
			</div>
		);
	};

}
	
