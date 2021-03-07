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
		let activities = ["Can you fit a 30 minute walk into your schedule?", "Today is the perfect day to learn how to solve a Rubik's Cube!", "There's nothing wrong with taking a short nap this afternoon.", "Have you ever considered starting a blog? Today could be the day.", "Pick up a book and get a good read in tonight.", "Why not bake something today?"]

		let rng = Math.floor(Math.random() * 6) + 1

		return activities[rng - 1]
	}

	function musicGenerator() {
		let songs = ["Save Your Tears by The Weeknd", "Before You Go by Lewis Capaldi", "Bad Liar by Imagine Dragons", "Happpy by Pharrell Williams", "Never Gonna Give You Up by Rick Astley", "God's Plan by Drake"]

		let rng = Math.floor(Math.random() * 6) + 1

		return songs[rng - 1]
	}

	let activityRec = activityGenerator()
	let songRec = musicGenerator()

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
						<input size= "47.5"/>
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