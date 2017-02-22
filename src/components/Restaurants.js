import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import firebase, { signOut } from '../firebase';

class Restaurants extends Component {
  constructor(){
    super()
      this.state = {
        restaurantID: ''
      }
    }

  debug(){
    debugger
  }
  setID(e){
    this.setState({restaurantID:e.target.id})
  }

  render(){

    if (!this.props.places.restaurants) {
      return <div className='loading'>Loading...</div>;
    }

    let restaurant = this.props.places.restaurants.map((restaurant)=>{
      return(
        <li onClick = {(e)=>this.setID(e)}
          key={restaurant.restaurant.id}
          id={restaurant.restaurant.id}
          className='single-restaurant'>
          {restaurant.restaurant.name} <br />
          {restaurant.restaurant.location.address}<br/>
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
