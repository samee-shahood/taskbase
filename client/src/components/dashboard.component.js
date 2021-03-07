import React, { Component, useState, useEffect } from 'react';
import "./dashboard.css";

import { CalendarEvent } from 'react-bootstrap-icons';


import { Card, ListGroup, Col, Row } from 'react-bootstrap';

import DatePicker from "react-datepicker";

import Weather from './weather.component';

import Music from './music.component';

import "react-datepicker/dist/react-datepicker.css";

import Clock from 'react-digital-clock';


import axios from 'axios';

import Form from "./form";
import NavBar from "./navbar.component"

const Dashboard =() =>{

	const [startDate, setStartDate] = useState(new Date());

	const[tasks, setTasks] = useState([]);

	const [activityRec, setActivity] = useState();
	// const [songRec, setMusic] = useState();
	const [state, setState] = useState('close')


	const fetchData = async () => {
		const result = await axios.get(
			'/api/tasks?date=' + startDate.toISOString(),
			{headers: {
				Authorization: "Bearer " + localStorage.getItem("token")
			}}
		);
		console.log(startDate);
		setTasks(result.data.tasks);
	};

	const fetchData2 = async (date) => {
		const result = await axios.get(
			'/api/tasks?date=' + date.toISOString(),
			{headers: {
				Authorization: "Bearer " + localStorage.getItem("token")
			}}
		);
		console.log(startDate);
		setTasks(result.data.tasks);
	};

	const changeDate = async (date) => {
		setStartDate(date);
		fetchData2(date);
	}

	function activityGenerator() {
		let activities = ["Can you fit a 30 minute walk into your schedule?", "Today is the perfect day to learn how to solve a Rubik's Cube!", "There's nothing wrong with taking a short nap this afternoon.", "Have you ever considered starting a blog? Today could be the day.", "Pick up a book and get a good read in tonight.", "Why not bake something today?"]

		let rng = Math.floor(Math.random() * 6) + 1

		setActivity(activities[rng - 1]);
	}
	useEffect(() => {
	 
		fetchData();
		activityGenerator();
		// musicGenerator();
	}, []);




	return(
			<div>
					<NavBar/>

				<br/>
				<div class="wrapper">
					
					{/* <div class="seven"> */}
						<form action="https://google.com/search" method="get">
							<input type="hidden" name="sitesearch" value="http://acme.com" />
							<input class="seven" type="text" name="q" placeholder="Google Search" />
						</form>

					{/* </div> */}
				

					<div class="one">
						<div className = "clock">
							<Clock />
						</div>
					</div>

					<div class="two">
                        <Card.Header id="notepadHeader" as="h5">
                            <div className="text-center">
                                Your Notepad
                            </div>
                        </Card.Header>
                        <textarea className="textbox" placeholder="Use this space for whatever you need..."></textarea>
                    </div>

					<div class="three">
						<Card.Header as="h5">
							<div className="text-center">
								Your Task List
							</div>

							<br />

							<div className="center">
								<Row>
								{/* <Col></Col> */}
								<Col xs={8}>
									<label >
										<Row>
											<Col md={5}>
											<DatePicker class="react-datepicker" selected={startDate} onChange={date => changeDate(date)} />
											</Col>
											<Col xs={3}></Col>
											<Col>
												<CalendarEvent  size={25} />									
											</Col>
										</Row>									
									</label>
								</Col>
								<Row>
									<Col><Form/></Col>				
								
							</Row>
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
													<Card.Title>{new Date(item.date).toLocaleDateString()}</Card.Title>
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
							<Card.Body>
								{/* <blockquote id="activity" className="blockquote mb-0"> */}
								{/* <p> */}
									{' '}
									{activityRec}
									{' '}
								{/* </p>
								</blockquote> */}
							</Card.Body>
					</div>

					<div class="six">
						<Music/>
						{/* <Card>
							<Card.Body>
								<blockquote id="activity" className="blockquote mb-0">
								<p>
									{' '}
									{songRec}
									{' '}
								</p>
								</blockquote>
							</Card.Body>
						</Card> */}
					</div>
				</div>


			</div>
	)

};

export default Dashboard;