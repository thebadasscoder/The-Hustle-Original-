//React + ReactDOM 
import React from 'react';
import {Link} from 'react-router';

const Navbar = () =>(
	<div id="navbar">
		<Link to="/">Home</Link>
		<br/>
		<Link to="/tasks">Tasks</Link>
		<br/>
		<Link to="/timer">Timer</Link>
		<br/>
		<Link to="wins">Wins</Link>
	</div>
)
export default Navbar;
