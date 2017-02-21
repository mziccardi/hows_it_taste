import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import firebase, { signOut } from '../firebase';

class Restaurants extends Component {
  debug(){
    debugger
  }

  render(){
    if (!this.props.places.restaurants) {
      return <div>I DONT EXIST </div>;
    }

    let restaurant = this.props.places.restaurants.map((restaurant)=>{
      return(
        <li key={restaurant.id}
          className='single-restaurant'>
          {restaurant.restaurant.name}
        </li>
      )
    })
    return (
      <div className='restaurants-page'>
      <ul>
         {restaurant}
      </ul>
      <button onClick = {()=>this.debug()}> debugger </button>
      </div>
    );
  }
}

module.exports = Restaurants
