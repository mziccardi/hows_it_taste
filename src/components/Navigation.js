import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import firebase, { signOut } from '../firebase';

class Navigation extends Component {

  render(){
    return (
    <div className="nav-bar">
      <Link to='/favorites'>
        <button className='fav-btn'>Favorites</button>
      </Link>
      <Link to='/notes'>
        <button className='fav-btn'>Notes</button>
      </Link>
      <Link to='/welcome'>
        <button
          className='sign-out'
          onClick={() => signOut()}>
          SIGN OUT
        </button>
      </Link>
      <Link to='/home'>
        <button className='home-btn'>Home</button>
      </Link>
    </div>
    );
  }
}

module.exports = Navigation
