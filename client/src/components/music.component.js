import React, { Component } from 'react';
import axios from 'axios';
import { Card, ListGroup, Col, Row } from 'react-bootstrap';
import "./dashboard.css";

export default class Music extends Component {
    constructor(props) {
        super(props);


        this.state = {
			song: 0
        };
	};

	componentDidMount() {
		let songs = [0, 1, 2, 3, 4, 5];
		let rng = Math.floor(Math.random() * 6) + 1
		this.setState(
			{song: songs[rng - 1]
		});
	}

	render(){
		return(
			<div>
				<Card.Body>
						We found a song you might like!!!
				</Card.Body>
				{this.state.song == 0 && 
					<iframe className="video"
					src="https://www.youtube.com/embed/CID-sYQNCew">
					</iframe>
				}
				{this.state.song == 1 && 
					<iframe className="video"
					src="https://www.youtube.com/embed/w2y715XAmso">
					</iframe>
				}
				{this.state.song == 2 && 
					<iframe className="video"
					src="https://www.youtube.com/embed/rFnxG-p_3Oo">
					</iframe>
				}
				{this.state.song == 3 && 
					<iframe className="video"
					src="https://www.youtube.com/embed/h4xJ3LoJLtM">
					</iframe>
				}
				{this.state.song == 4 && 
					<iframe className="video"
					src="https://www.youtube.com/embed/GCdwKhTtNNw">
					</iframe>
				}
				{this.state.song == 5 && 
					<iframe className="video"
					src="https://www.youtube.com/embed/qn4XQ9WweRY">
					</iframe>
				}

			</div>
		);
	};

}
	
