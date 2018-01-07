import {combineReducers} from 'redux'; 
import goals from  './goalsReducer.js';
import visibilityFilter from './visibilityReducer.js';
import main from './mainReducer.js';


const allReducers = combineReducers({
	goals,
	main,
	visibilityFilter,
}); 

export default allReducers ;



