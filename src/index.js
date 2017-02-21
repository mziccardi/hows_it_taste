import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeScreen from './components/WelcomeScreen'
import HomeScreen from './components/HomeScreen'
import Restaurants from './components/Restaurants'

import { Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './components/App';
import './index.css';


const router = (
  <Router history = {browserHistory}>
    <Route path = '/' component = {App}>
      <IndexRoute component={WelcomeScreen}/>
      {/* <IndexRoute component={HomeScreen}/> */}
    <Route path = '/welcome' component={WelcomeScreen}/>
    <Route path = '/home' component = {HomeScreen} />
    <Route path = '/restaurants' component = {Restaurants} />
      </Route>
  </Router>
)


ReactDOM.render(router, document.getElementById('root'));
