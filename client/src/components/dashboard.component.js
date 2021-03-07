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
	const [songName, setsongName] = useState();
	const [link, setLink] = useState();
	const [profileimage, setImage] = useState();

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

		const weekend = {
            name: "The Weekend",
            song_name: "Save Your Tears",
            link: "https://www.youtube.com/watch?v=XXYlFuWEuKI&ab_channel=TheWeekndVEVO",
            picture: "https://www.rap-up.com/app/uploads/2020/02/the-weeknd-after-hours.jpg", 
        }

		const Lewis = {
			name: "Lewis Capaldi",
            song_name: "Before You Go",
            link: "https://www.youtube.com/watch?v=Jtauh8GcxBY",
            picture: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theguardian.com%2Fmusic%2F2019%2Foct%2F10%2Flewis-capaldi-theyre-screaming-americas-sweetheart-at-me-its-wild&psig=AOvVaw1WTQCsA_HyHjr1Il6FT_rL&ust=1615178634141000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPizyrmvne8CFQAAAAAdAAAAABAD", 
        }

		const Imagine_Dragons = {
			name: "Imagine Dragons",
            song_name: "Bad Liar",
            link: "https://www.youtube.com/watch?v=I-QfPUz1es8",
            picture: "https://upload.wikimedia.org/wikipedia/en/6/66/Imagine_Dragons_Bad_Liar.jpg"
        }

		const Pharrell = {
			name: "Pharrell Williams",
            song_name: "Happy",
            link: "https://www.youtube.com/watch?v=ZbZSe6N_BXs",
            picture: "https://upload.wikimedia.org/wikipedia/en/2/23/Pharrell_Williams_-_Happy.jpg", 
        }

		const Rick = {
			name: "Rick Astley",
            song_name: "Never Gonna Give You Up",
            link: "https://www.youtube.com/watch?v=DLzxrzFCyOs",
            picture: "https://images.genius.com/a473b0f49d967687c66db5f4140b54d1.999x999x1.jpg", 
        }

		const Drake = {
			name: "Drake",
            song_name: "God's Plan",
            link: "https://www.youtube.com/watch?v=xpVfcZ0ZcFM",
            picture: "https://s.mxmcdn.net/images-storage/albums4/4/9/5/1/0/4/39401594_350_350.jpg", 
        }

		let songs = [weekend, Lewis, Imagine_Dragons, Pharrell, Rick, Drake]

		let rng = Math.floor(Math.random() * 6) + 1

		//setMusic(songs[rng - 1]).name;

		setMusic(songs[rng - 1].name);
		setsongName(songs[rng - 1].song_name);
		setLink(songs[rng - 1].link);
		setImage(songs[rng - 1].picture);
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
							<Card.Title>Music to listen to:</Card.Title>
							<Card.Img variant="top" src = {profileimage}/>
								<blockquote id="activity" className="blockquote mb-0">
								{/* <p>
									{' '}
									{
										"Music to listen to:\n"+ songRec + "\n" + songName
									}
									{' '}
								</p> */}
								<Card.Body>
							<Card.Title>
								<p>
									{' '}
									{
										songName
									}
									{' '}
								</p>
							</Card.Title>
							<Card.Text>
								<p>
									{' '}
									{
										"by: " + songRec
									}
									{' '}
								</p>
							</Card.Text>
						</Card.Body>
								</blockquote>
							</Card.Body>
						</Card>
					</div>
				</div>

			</div>
	)

};

export default Dashboard;