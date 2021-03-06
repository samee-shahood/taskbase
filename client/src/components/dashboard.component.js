import React, { Component } from 'react';
import "./dashboard.css";

import Axios from 'axios';

export default class Dashboard extends Component{

    constructor(props){
        super(props);

        this.state = {
            
        }
    }


    componentDidMount() {
        console.log('reloaded /search');
    } 

	async componentWillReceiveProps(props){
		console.log("nothing");
    } 

    render(){
       
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
							Three
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
    }

}