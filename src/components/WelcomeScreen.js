import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase, { reference, signIn, signOut } from '../firebase';

class WelcomeScreen extends Component {
  render(){
    return (
    <div className="welcome-page">
      <h2>Welcome Please Sign in</h2>
      <button
        className='sign-in'
        onClick={() => signIn()}>
        SIGN IN
      </button>
    </div>
    );
  }
}

module.exports = WelcomeScreen
