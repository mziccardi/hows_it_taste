import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount,render} from 'enzyme'
import { assert, expect } from 'chai'
import Restaurants from '../components/Restaurants';
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
 let restaurants={
   name:'chipotle',
   id:23,
   city: 'denver'
 }
  it('renders as a Div', ()=>{
    const wrapper = shallow(<Restaurants children ={true} restaurants={restaurants} places={places} />)
    assert.equal(wrapper.type(),'div')
  })
  it.skip('should render the navigation component',()=>{
    const wrapper = shallow(<Restaurants children={true} user={user} restaurants={restaurants} places={places}/>)
    assert.equal(wrapper.find('Navigation').length,1)
  })
  it('should show a list of 20 restaurants',()=>{
    const wrapper = shallow(<Restaurants children={true} user={user} restaurants={restaurants}/>)
    assert.equal(wrapper.find('.single-restaurant').length,20)
  })
})
