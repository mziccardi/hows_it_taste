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
      return <div className='loading'>Loading...</div>;
    }

    let restaurant = this.props.places.restaurants.map((restaurant)=>{
      return(
      <Link to ='/restaurant'>
        <li onClick = {(e)=>this.props.setIdState(e)}
          key={restaurant.restaurant.id}
          id={restaurant.restaurant.id}
          className='single-restaurant'>
          {restaurant.restaurant.name} <br />
          {restaurant.restaurant.location.address}<br/>
        </li>
      </Link>
      )

    })
    return (
      <div className='restaurants-page'>
        <div className ='restaurant-container'>
      <ul  className='restaurant-list'>
         {restaurant}
      </ul>
      </div>
      <button onClick = {()=>this.debug()}> debugger </button>
      </div>
    );
  }
}

module.exports = Restaurants
