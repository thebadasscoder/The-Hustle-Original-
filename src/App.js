//npm modules 
import React from 'react';
import ReactDOM from'react-dom';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
import {Provider} from 'react-redux';

//Components 
import Navbar from './components/Navbar.jsx';
import Home from './components/homepage.jsx';
import Tasks from './components/addGoals.jsx';
// import Timer from './components/timer.jsx';
// import Wins from './components/wins.jsx';
//Redux 
import store from './store/store.js';

//CSS 
import './App.css';


//App
const App = (props) =>{
    return (
     <div>
     	<Navbar/>
 		{this.props.children}
    </div>	
    )
}

//Routes
ReactDOM.render(
	<Provider store={store}>
	  <Router history={browserHistory}>
	   <Route path="/" component={App}>
	   <IndexRoute component={Home}/>
	   <Route path="tasks" component={Tasks}/>
	 	</Route>
	  </Router>	
	</Provider>,
  document.getElementById('root')
);

export default App;



