import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import firebase, { signOut } from '../firebase';

class HomeScreen extends Component {

  render(){
    if(!this.props.user){
      return <div className='loading'>Loading...</div>
    }
    return (
    <div className="home-page">
      <h3>Welcome back {this.props.user.displayName}</h3>
      <Link to='/welcome'>
      <button
        className='sign-out'
        onClick={() => signOut()}>
        SIGN OUT
      </button>
    </Link>
    <Link to='/restaurants'>
      <button onClick={()=>this.props.call()}>Get Restaurants</button>
    </Link>
    </div>
    );
  }
}

module.exports = HomeScreen
