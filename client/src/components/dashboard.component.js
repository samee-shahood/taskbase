import React, { Component, useState } from 'react';
import "./dashboard.css";

import { Card, ListGroup, Col, Row } from 'react-bootstrap';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import Axios from 'axios';

const Dashboard =() =>{

	const [startDate, setStartDate] = useState(new Date());

	let tasks = [{
		date: "03/06/2021",
		title: "Integrate API",
		description: "i need to unhard code this"	
	},

	{
		date: "03/07/2021",
		title: "Submit",
		description: "need to submit this!"	
	}];

       
	return(
			<div>
				<div class="wrapper">
					<div class="one">
						One
					</div>

					<div class="two">
						Two
					</div>

					<div class="three">
					<Card.Header as="h5">
						Your Task List
					
					<DatePicker selected={startDate} onChange={date => setStartDate(date)} />
					</Card.Header>
					<ListGroup variant="flush">

						{tasks.map((item =>
							<ListGroup.Item>
								
								{/* <Card style={{ width: '18rem' }}> */}
									<Card.Body>
										<Row>
											<Col md={5}>
												<Card.Title>{item.title}</Card.Title>
											</Col>
											<Col xs={3}></Col>
											<Col>
												<Card.Title>{item.date}</Card.Title>
											</Col>
										</Row>
										
										{/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
										<Card.Text>
										{item.description}
										</Card.Text>
									</Card.Body>
								{/* </Card> */}

							</ListGroup.Item>
						))}
					</ListGroup>

					</div>

					<div class="four">
						Four
					</div>

					<div class="five">
						Five
					</div>

					<div class="six">
						Six
					</div>
				</div>

			</div>
	)

};

export default Dashboard;