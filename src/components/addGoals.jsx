import React from 'react';
import store from '../store/store.js';
import {addGoal, completeGoal,mainGoal} from '../actions/actions.js';
import {connect} from 'react-redux'; 

const mapStateToProps = (state)=>{
	return {goals: state.goals,main:state.main}
}

const Tasks = React.createClass({
	render(){
		console.log(this.props.main.text, 'this is the main text')
		return(
			<div>
			<center>

			<h1>{this.props.main.text}</h1>

				<input type="text" autoComplete="off" ref={node => {
					this.input = node;
				}}/>
				<button onClick={() =>{store.dispatch(addGoal(this.input.value));
					this.input.value = '';
				}}>+</button>

				<ul>
					{this.props.goals.map(goal =>(<li key={goal.id}>{goal.text}</li>))}
				</ul>
			</center>
			</div>
		)
	}
})

 //store.dispatch is where we are sending off the actions to the addGoal 

export default connect(mapStateToProps)(Tasks);