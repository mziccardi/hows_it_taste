import React, { Component } from 'react';
import SignIn from './SignIn'

import firebase, {reference, signIn, signOut} from '../firebase';

class App extends Component {
  constructor(){
    super()
    this.state = {
      lat:'',
      long:'',
      user: null,
      places:{},
    }
  }
  // TODO: change signin component to welcomeScreen, Change signOut component to homescreen. 

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position)=>{
      let newLat = parseFloat(Math.round(position.coords.latitude*100)/100).toFixed(2)
      let workingLat = parseFloat(newLat)
      let newLong = parseFloat(Math.round(position.coords.longitude*100)/100).toFixed(2)
      let workingLong = parseFloat(newLong)
      console.log(workingLat)
      console.log(workingLong)
      this.setState({lat:workingLat, long:workingLong})

    })
    firebase.auth().onAuthStateChanged(user=> this.setState({ user }))
  }
  call(){
    const places = `https://developers.zomato.com/api/v2.1/search?lat=${this.state.lat}&lon=${this.state.long}`
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
      this.setState({places: data})
    })
  }
  debugg(){
    debugger
  }
  render() {
    const { places } = this.state
    return (
      <div className="App">
        <div className="App-header">
          <h1>How's it taste</h1>
          {!this.state.user ?
          <h2>Welcome, Please Sign in</h2> :
          <h2>Welcome {this.state.user.displayName}</h2>}
        </div>
        <button onClick={this.debugg.bind(this)}></button>
        <button onClick={()=>this.call()}>Work?</button>

      </div>
    );
  }
}

export default App;
