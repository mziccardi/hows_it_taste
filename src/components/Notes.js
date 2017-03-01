import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router'
import firebase, { reference, signOut } from '../firebase';
import Navigation from './Navigation'


class Notes extends Component {


  debug(){
    debugger
  }
  componentDidMount(){
    this.props.getNotes()
  }

  render(){
    if (!this.props.notes) {
      return <div>NOT HERE</div>;
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
        <button onClick = {()=> this.debug()}>debugger</button>
        <ul className='note-container'>
          {notes}
        </ul>
      </div>
    )
  }
}
module.exports = Notes