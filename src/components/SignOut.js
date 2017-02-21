import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase, { signOut } from '../firebase';

class SignOut extends Component {
  render(){
    return (
    <div className="sign-out-page">
      <button
        className='sign-out'
        onClick={() => this.props.signOut()}>
        SIGN OUT
      </button>
    </div>
    );
  }
}

module.exports = SignOut
