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
		console.log(date);
		setStartDate(date);
		fetchData2(date);
	}

	useEffect(() => {
	 
		fetchData();
	  }, []);



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

					<div class="four">
						<Weather/>
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