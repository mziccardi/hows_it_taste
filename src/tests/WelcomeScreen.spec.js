import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount,render} from 'enzyme'
import { assert, expect } from 'chai'
import WelcomeScreen from '../components/WelcomeScreen';
const sinon = require('sinon')

describe('WelcomeScreen', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<WelcomeScreen children={true} />)
  })
  it('renders as a Div', ()=>{
    const wrapper = shallow(<WelcomeScreen children ={true} />)
    assert.equal(wrapper.type(),'div')
  })
  it('should have a signIn button',()=>{
    const wrapper = shallow(<WelcomeScreen children={true} />)
    assert.equal(wrapper.find('button').length,1)
  })
  it.skip('should sign into the app on button click', ()=>{
  let signIn = sinon.spy();
  const wrapper = mount(<WelcomeScreen children = {true} signIn={signIn} />);
  wrapper.find('.sign-in').simulate('click');
  // expect(signIn.calledOnce,true)
  expect(signIn).to.have.property('callCount',1)
})
})
