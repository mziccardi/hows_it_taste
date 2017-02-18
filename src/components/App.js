import React, { Component } from 'react';
import SignIn from './SignIn'
import firebase, {reference, signIn, signOut} from '../firebase';

class App extends Component {
  constructor(){
    super()
    this.state = {
      lat:'',
      long:'',
      user:'',
      places:{},
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position)=>{
      this.setState({lat:position.coords.latitude, long:position.coords.longitude})
      console.log(position.coords.latitude)
    })
  }
  call(){
    const places = 'https://developers.zomato.com/api/v2.1/search?q=denver'
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
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <button onClick={this.debugg.bind(this)}></button>
        <button onClick={this.call.bind(this)}>Work?</button>
        <SignIn signIn={signIn} />
      </div>
    );
  }
}

export default App;
