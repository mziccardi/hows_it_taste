import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import firebase, { signOut } from '../firebase';

class Restaurants extends Component {

  render(){
    let restaurant = this.props.places.restaurants.map((restaurant)=>{
      return(
        <li key={restaurant.id}
          className='single-restaurant'>
          {restaurant.name}
        </li>
      )
    })
    return (
      <div className='restaurants-page'>
        <ul>
          {restaurant}
        </ul>
      </div>
    );
  }
}

module.exports = Restaurants
