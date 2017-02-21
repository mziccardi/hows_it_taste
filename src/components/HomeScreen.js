import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase, { signOut } from '../firebase';

class HomeScreen extends Component {
  render(){
    return (
    <div className="home-page">
      <h3>Welcome back {this.props.user.displayName}</h3>
      <button
        className='sign-out'
        onClick={() => signOut()}>
        SIGN OUT
      </button>
    </div>
    );
  }
}

module.exports = HomeScreen
