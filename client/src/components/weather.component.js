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
			<div style={{ 
				backgroundImage: `url("https://fasken.azureedge.net/-/media/29b8b6a371344d40a392350b395691d6.ashx?mw=2560&modified=20200624134121&hash=69328985F09305B8D5FFD44766B77D53")` 
			  }}>
				  
				<ListGroup variant="flush">
								<ListGroup.Item>
									
									{/* <Card style={{ width: '18rem' }}> */}
									<Card.Img id="city" src="https://fasken.azureedge.net/-/media/29b8b6a371344d40a392350b395691d6.ashx?mw=2560&modified=20200624134121&hash=69328985F09305B8D5FFD44766B77D53" alt="Card image" />
									<Card.ImgOverlay>
										<Card.Body>
											<Row>
												<Col md={7}>													
													<Card.Title>{this.state.location}</Card.Title>
													<Row>
														<Col md={3}>
															<img src={this.state.icon} />
														</Col>

														<Col md={9}>
															<Card.Text id="WeatherDesc">
																{this.state.forecast}
															</Card.Text>
														</Col>
													</Row>
												</Col>
												<Col xs={2}></Col>
												<Col>
													<Card.Title id="temp">{this.state.temperature} °C</Card.Title>
												</Col>
											</Row>
										</Card.Body>
									</Card.ImgOverlay>
								</ListGroup.Item>
		
						</ListGroup>
			</div>
		);
	};

}
	
