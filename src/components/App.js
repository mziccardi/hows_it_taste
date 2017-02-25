import React, { Component } from 'react';
import WelcomeScreen from './WelcomeScreen'
import HomeScreen from './HomeScreen'
import firebase, {reference, signIn, signOut} from '../firebase';

class App extends Component {
  constructor(){
    super()
    this.state = {
      lat:'',
      long:'',
      user: null,
      places:{},
      restaurantID: '',
      singleName:'',
      notes:'',
      favorite:false,
    }
  }
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
      this.setState({places: data })
    })
  }
  setIdState(e){
    console.log(e.target.className)
    this.setState({restaurantID:e.target.id, singleName:e.target.className})
  }
  favorite(e){
    reference.push({
      restaurantID:this.state.restaurantID,
      favorite:!this.state.favorite,
      name:this.state.singleName,
    })
  }
  render() {
    const { places } = this.state
    return (
      <div className='app'>
        <div className = 'app-header'>
          <h1 className='app-title'>How's It Taste?</h1>
        </div>
        {React.cloneElement(this.props.children,{
          lat:this.state.lat,
          long:this.state.long,
          places:this.state.places,
          user:this.state.user,
          restaurantID:this.state.restaurantID,
          call:this.call.bind(this),
          restaurantID:this.state.restaurantID,
          setIdState:this.setIdState.bind(this),
          singleName:this.state.singleName,
          favorite:this.favorite.bind(this)
        })}
    </div>
    )
  }
}
export default App;
