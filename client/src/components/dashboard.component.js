import React, { Component, useState } from 'react';
import "./dashboard.css";

import { CalendarEvent } from 'react-bootstrap-icons';


import { Card, ListGroup, Col, Row } from 'react-bootstrap';

import DatePicker from "react-datepicker";

import Weather from './weather.component';

import "react-datepicker/dist/react-datepicker.css";

import Axios from 'axios';

const Dashboard =() =>{

	const [startDate, setStartDate] = useState(new Date());

	function activityGenerator() {
		let activities = ["Can you fit a 30 minute walk into your schedule?", "Today is the perfect day to learn how to solve a Rubik's Cube!", ""]

		let rng = Math.floor(Math.random() * 6) + 1


	}

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

	//const[tasks, setTasks] = useState({tasks});


	// useEffect(() => {
	// 	const fetchData = async () => {
	// 	  const result = await axios(
	// 		'https://hn.algolia.com/api/v1/search?query=redux',
	// 	  );


	// 	  setData(result.data);
	// 	};
	 
	// 	fetchData();
	//   }, []);



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
							<div className="text-center">
								Your Task List
							</div>

							<br />

							<div className="center">
								<Row>
								<Col></Col>
								<Col xs={10}>
									<label >
										<Row>
											<Col md={5}>
											<DatePicker class="react-datepicker" selected={startDate} onChange={date => setStartDate(date)} />
											</Col>
											<Col xs={3}></Col>
											<Col>
												<CalendarEvent  size={25} />									
											</Col>
										</Row>									
									</label>
								</Col>
								<Col></Col>
								</Row>
							</div>
					
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
		
											<Card.Text>
											{item.description}
											</Card.Text>
										</Card.Body>

								</ListGroup.Item>
							))}
						</ListGroup>

					</div>

					<div class="four">
						<Weather/>
					</div>

					<div class="five">
					<Card>
						<Card.Body>
							<blockquote className="blockquote mb-0">
							<p>
								{' '}
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
								erat a ante.{' '}
							</p>
							</blockquote>
						</Card.Body>
					</Card>
					</div>

					<div class="six">
						Six
					</div>
				</div>

			</div>
	)

};

export default Dashboard;