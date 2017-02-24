import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router'
import firebase, { reference, signIn, signOut } from '../firebase';

class Restaurant extends Component {
  constructor(){
    super()
    this.state = {
      reviews:{}
    }
  }
  debug(){
    debugger
  }

  componentDidMount(){
    const places = `https://developers.zomato.com/api/v2.1/reviews?res_id=${this.props.restaurantID}&count=10`
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
      this.setState({reviews: data })
      })
  }

  render(){
    if (!this.state.reviews.user_reviews) {
      return <div className='loading'>Loading...</div>;
    }

    let review = this.state.reviews.user_reviews.map((review)=>{
      return (
        <li className='single-review'>
          {review.review.review_text}
        </li>
      )
    })
    return (
      <div>
      <ul className='single-review'>
        {review}
      </ul>
      <button onClick={()=>this.debug()}></button>
    </div>
    )
  }
}

module.exports = Restaurant
