import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import firebase, { reference, signOut } from '../firebase';
import Navigation from './Navigation'


class Favorites extends Component {


  debug(){
    debugger
  }
  componentDidMount(){
    this.props.getFavorites()
  }

  render(){
    if (!this.props.favorites.favorites) {
      return <div></div>;
    }
 let restaurantName = Object.keys(this.props.favorites.favorites).map((key) => this.props.favorites.favorites[key])
  let restaurants = restaurantName.map((restaurant)=>{
    return (
      <li className ='single-favorite' >
        {restaurant.name}
      </li>
    )
  })

    return(
      <div>
        <Navigation />
        <ul className='favorite-container'>
          {restaurants}
        </ul>
        <button onClick = {()=>this.debug()}>debugg</button>
      </div>
    )
  }
}
module.exports = Favorites
