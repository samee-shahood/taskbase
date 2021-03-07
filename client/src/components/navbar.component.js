import React from 'react';
import './navbar.css';


const NavBar = () => {
    return(
		// <div className="bg-blue-100">

				<div className="relative">
						<div class="navbar">
							<a href="/">TaskBase</a>
							<a href="/api/users/logout" class ="right">Logout</a>
						</div>
				</div>


		// </div>
    )
}

export default NavBar;