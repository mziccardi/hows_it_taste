import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import firebase, { reference, signOut } from '../firebase';


class Favorites extends Component {


  debug(){
    debugger
  }
  componentDidMount(){
    this.props.getFavorites()
  }

  render(){
    return(
      <div>
        Hello WOrld
        <Link to='/home'><button>Home</button></Link>
        <button onClick={()=>this.debug()}>debugger</button>
      </div>
    )
  }
}
module.exports = Favorites
