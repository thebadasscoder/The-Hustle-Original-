import React from 'react';
import {mainGoal} from '../actions/actions.js';
import store from '../store/store.js';
import {browserHistory} from 'react-router';

const Home = React.createClass({
getInitialState(){
	return({text:''})
},
handleChange(e){
 this.setState({text:e.target.value});
},
handleSubmit(e){
	e.preventDefault();
	store.dispatch(mainGoal(this.state.text));
	browserHistory.push("/Tasks")
},
	render(){
	console.log(this.state.text, 'this is the title')
		return(
		<div className="focus">
		<center>
		  	<h1>HUSTLE</h1>
		  	<h3> What is your main focus for today?</h3>
		    <form onSubmit={this.handleSubmit}>
		    <input type="text"className="text-line" value={this.state.text} onChange={this.handleChange} />
		    </form>
	    </center>
		</div>
		)
	}
})

export default Home; 