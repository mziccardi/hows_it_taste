import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount,render} from 'enzyme'
import { assert, expect } from 'chai'
import Restaurant from '../components/Restaurants';
const sinon = require('sinon')

describe('Restaurants', () => {
  let user ={
   displayName: 'mike',
   uid:3
 }
  let places ={
   name: 'chipotle',
   city:'denver'
 }
 let restaurant={
   name:'chipotle',
   id:23,
   city: 'denver'
 }
  it('renders as a Div', ()=>{
    const wrapper = shallow(<Restaurant children ={true} restaurant={restaurant} places={places} />)
    assert.equal(wrapper.type(),'div')
  })
  it('should render the navigation component',()=>{
    const wrapper = shallow(<Restaurant children={true} user={user} restaurant={restaurant} places={places}/>)
    assert.equal(wrapper.find('Navigation').length,1)
  })

})
