//THIS IS THE COMPONENT TO ADD GOALS 
// EVERY TIME A GOAL IS CREATED WE WILL BE TRACK OF IT BY THE ID
let nextGoalId = 0;
export const addGoal = (text)=>{
	return{
		type: 'ADD_GOAL',
		id: nextGoalId++,
		text,
		completed: false
	}
}

// THE COMPONENT FOR COMPLETED GOALS 

export const completeGoal =(index)=>{
	return {
		type: 'COMPLETE_GOAL',
		index
	};
}

//THE COMPONENT FOR DISPLAYING ALL OF THE GOALS (MAIN GOAL + SUB GOALS) 


export const allGoals = (index)=>{
	return {
		type: 'ALL_GOALS',
		 index
	};
	
}

// THE COMPONENT  FOR FILTERING GOALS 

export const visibilityFilter = (filter) =>{
	return {
		type:'SET_VISIBLITY_FILTER',
		filter
	};

}

export const mainGoal = (text)=>{
	return {
		type: 'SET_GOAL',
		text
	}
}

export const timer = (date)=>{
	return {
		type: 'SET_TIME',
		date
	}
}
