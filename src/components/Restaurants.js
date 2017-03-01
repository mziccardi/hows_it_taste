import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import firebase, { signOut } from '../firebase';
import Navigation from './Navigation'

class Restaurants extends Component {

  render(){

    if (!this.props.places.restaurants) {
      return <div className='loading'>Loading...</div>;
    }


    let restaurant = this.props.places.restaurants.map((restaurant)=>{
      return(
      <Link to ='/restaurant/reviews'>
        <div
          key={restaurant.restaurant.id}

          className='single-restaurant'>

          <div
            className ={restaurant.restaurant.name}
            id={restaurant.restaurant.id}
            onClick = {(e)=>this.props.setIdState(e)}
            >{restaurant.restaurant.name}
          </div> <br />
          {restaurant.restaurant.location.address}<br/>
        </div>
      </Link>
      )

    })
    return (
      <div className='restaurants-page'>
        <Navigation />
        <div className ='restaurant-container'>
      <ul  className='restaurant-list'>
         {restaurant}
      </ul>
      </div>
      </div>
    );
  }
}

module.exports = Restaurants
