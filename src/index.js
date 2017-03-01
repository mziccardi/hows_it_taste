import React from 'react';
import ReactDOM from 'react-dom';
import WelcomeScreen from './components/WelcomeScreen'
import HomeScreen from './components/HomeScreen'
import Restaurants from './components/Restaurants'
import Restaurant from './components/Restaurant'
import Favorites from './components/Favorites'
import Notes from './components/Notes'



import { Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './components/App';
import './reset.css';
import './index.css';


const router = (
  <Router history = {browserHistory}>
    <Route path = '/' component = {App}>
      <IndexRoute component={WelcomeScreen}/>
    <Route path = '/welcome' component={WelcomeScreen}/>
    <Route path = '/home' component = {HomeScreen} />
    <Route path = '/restaurants' component = {Restaurants} />
    <Route path = '/restaurant/reviews' component = {Restaurant} />
    <Route path = '/favorites' component = {Favorites} />
    <Route path = '/notes' component = {Notes} />
      </Route>
  </Router>
)


ReactDOM.render(router, document.getElementById('root'));
