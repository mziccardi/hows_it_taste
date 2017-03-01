import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount,render} from 'enzyme'
import { assert, expect } from 'chai'
import App from '../components/App';
const sinon = require('sinon')

describe('App', () => {
  it('can mount with no properties', () => {
    const wrapper = shallow(<App children={true} />)
  })
  it('renders as a Div', ()=>{
  const wrapper = shallow(<App children ={true} />)
  assert.equal(wrapper.type(),'div')
  })
  it.skip('can call componentDidMount', () => {
    sinon.spy = (App.prototype, 'componentDidMount')
    const wrapper = mount(<App children={true} />)
    assert.equal(App.prototype.componentDidMount.calledOnce, true)
  })
})
