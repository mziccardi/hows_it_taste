import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import firebase, { reference, signIn, signOut } from '../firebase';

class Restaurant extends Component {
  debug(){
    debugger
  }

  reviews(){
    const places = `https://developers.zomato.com/api/v2.1/reviews?res_id=${this.props.restaurantID}`
    fetch(places,{
      headers:{
        Accept: 'application/json',
        'user-key': "dc7fb0e7fdc8844d6f635fa6dc1b29e5",
      }
    })
    .then((response)=>{
      return response.json()
    }).then((data)=>{
      console.log(data)
      })
      // this.setState({places: data })
  }

  render(){
    return (
      <div>
      <div onClick = {()=>this.reviews()}>Hello</div>
      <button onClick={()=>this.debug()}></button>
    </div>
    )
  }
}

module.exports = Restaurant
