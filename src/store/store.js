import {createStore} from 'redux';//This is our store where all of our data for my appliction
import allReducers from '../reducers/index.js';


const store = createStore(allReducers); //It always takes in one reducer 

//subscribe allows us to listen out for any changes that is being made within the store
store.subscribe(()=>{
	console.log("store changed", store.getState()) 
})

export default store; 