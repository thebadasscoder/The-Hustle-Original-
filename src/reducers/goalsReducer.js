const Goals = (state = [],action)=>{
	switch(action.type){
	case 'ADD_GOAL':
		return [
		...state,
			 {
			id: action.id,
			text: action.text,
			completed: false
			}
		];
	case 'COMPLETE_GOAL':
		return state.map(s => 
		{if(s.id === action.id){
	  		s.completed = !s.completed
	  	}}
	  	
		)
		default:
		return state;
	}
};

export default Goals; 

