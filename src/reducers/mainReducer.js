const mainGoal = (state={text: ''},action)=>{
	switch(action.type){
	case 'SET_GOAL':
		return {
			text: action.text
		}
	default:
	   return state;
	}
}

export default mainGoal;