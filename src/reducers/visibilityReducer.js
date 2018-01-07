const visibilityFilter = (state = 'ALL_GOALS', action) =>{
	switch(action.type){
		case 'SET_VISIBLITY_FILTER':
			return action.filter;
		default:
			return state;
	}
}

export default visibilityFilter;


// const Goal = (state = [],action)=>{
// 	switch(action.type){
// 	case 'ADD_GOALS':
// 		return {
// 			id: action.id,
// 			text: action.text,
// 			completed: false
// 		};
	
// 	return {
// 	  	...state,
	  	
// 	  };
// 	  default:
// 	  	return state;
// 	}
// };
// export default  Goal;