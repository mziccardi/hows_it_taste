import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase, { reference, signIn, signOut } from '../firebase';

class SignIn extends Component {
  render(){
    return (
    <div className="sign-in-page">
      <button
        className='sign-in'
        onClick={() => this.props.signIn()}>
        SIGN IN
      </button>
    </div>
    );
  }
}

module.exports = SignIn
