import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import firebase, { reference, signOut } from '../firebase';
import Navigation from './Navigation'


class Notes extends Component {

  componentDidMount(){
    this.props.getNotes()
  }

  render(){
    if (!this.props.notes) {
      return (
        <div>
          <Navigation />
          <h1 className='no-fav'>You have no notes</h1>
        </div>
      )
    }

  let noteName = Object.keys(this.props.notes).map((key) => this.props.notes[key])
  let notes = noteName.map((note)=>{
    if(note.userName === this.props.user.displayName){
      return (
        <li className ='single-note' >
          {note.userName}<br/>
          {note.name}: {note.notes}
          <br/>
          <br/>
        </li>
      )
  }
  })

    return(
      <div>
        <Navigation />
        <h1 className = 'notes-page'>Notes</h1>
        <ul className='note-container'>
          {notes}
        </ul>
      </div>
    )
  }
}
module.exports = Notes
