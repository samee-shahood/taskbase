import React, { Component, useState, useEffect } from 'react';
import "./dashboard.css";

import { CalendarEvent } from 'react-bootstrap-icons';


import { Card, ListGroup, Col, Row } from 'react-bootstrap';

import DatePicker from "react-datepicker";

import Weather from './weather.component';

import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';

const Dashboard =() =>{

	const [startDate, setStartDate] = useState(new Date());

	const[tasks, setTasks] = useState([]);

	const [activityRec, setActivity] = useState();
	const [songRec, setMusic] = useState();

	const fetchData = async () => {
		const result = await axios.get(
			'http://localhost:5000/api/tasks?date=' + startDate.toISOString(),
			{headers: {
				Authorization: "Bearer " + localStorage.getItem("token")
			}}
		);
		console.log(startDate);
		setTasks(result.data.tasks);
	};

	const fetchData2 = async (date) => {
		const result = await axios.get(
			'http://localhost:5000/api/tasks?date=' + date.toISOString(),
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

	function musicGenerator() {
		let songs = ["Save Your Tears by The Weeknd", "Before You Go by Lewis Capaldi", "Bad Liar by Imagine Dragons", "Happpy by Pharrell Williams", "Never Gonna Give You Up by Rick Astley", "God's Plan by Drake"]

		let rng = Math.floor(Math.random() * 6) + 1

		setMusic(songs[rng - 1]);
	}

	useEffect(() => {
	 
		fetchData();
		activityGenerator();
		musicGenerator();
	}, []);




	return(
			<div>
				<div class="wrapper">
					<div class="one">
						One
					</div>

					<div class="two">
                        <Card.Header id="notepadHeader" as="h5">
                            <div className="text-center">
                                Your Notepad
                            </div>
                        </Card.Header>
                        <textarea name="notepad" cols="43" rows="27" placeholder="Use this space for whatever you need..."></textarea>
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
											<DatePicker class="react-datepicker" selected={startDate} onChange={date => changeDate(date)} />
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

					<div class="four" style={{ 
				backgroundImage: `url("https://fasken.azureedge.net/-/media/29b8b6a371344d40a392350b395691d6.ashx?mw=2560&modified=20200624134121&hash=69328985F09305B8D5FFD44766B77D53")`}}>
						<Weather/>
					</div>

					<div class="five">
						<Card>
							<Card.Body>
								<blockquote id="activity" className="blockquote mb-0">
								<p>
									{' '}
									{activityRec}
									{' '}
								</p>
								</blockquote>
							</Card.Body>
						</Card>
					</div>

					<div class="six">
						<Card>
							<Card.Body>
								<blockquote id="activity" className="blockquote mb-0">
								<p>
									{' '}
									{songRec}
									{' '}
								</p>
								</blockquote>
							</Card.Body>
						</Card>
					</div>
				</div>

			</div>
	)

};

export default Dashboard;