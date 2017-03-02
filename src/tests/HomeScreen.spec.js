import React from 'react';
import ReactDOM from 'react-dom';
import {shallow,mount,render} from 'enzyme'
import { assert, expect } from 'chai'
import HomeScreen from '../components/HomeScreen';
const sinon = require('sinon')

describe('HomeScreen', () => {
  let user ={
   displayName: 'mike',
   uid:3
 }
  it('can mount with no properties', () => {
    const wrapper = shallow(<HomeScreen children={true} />)
  })
  it('renders as a Div', ()=>{
    const wrapper = shallow(<HomeScreen children ={true} user={user} />)
    assert.equal(wrapper.type(),'div')
  })
  it('should have a get restaurants button',()=>{
    const wrapper = shallow(<HomeScreen children={true} user={user} />)
    wrapper.debug()
    assert.equal(wrapper.find('button').length,1)
  })
  it('should have the button text rendered onto the page', function(){
  const wrapper = render(<HomeScreen children={true} user={user}/>)
  expect(wrapper.text()).to.contain('Hungry? Find Restaurants!')
})
  it.skip('should get restaurants on button click', ()=>{
  let call = sinon.spy();
  const wrapper = mount(<HomeScreen children = {true} user={user} call={call} />);
  wrapper.find('.get-restaurants').simulate('click');
  expect(call).to.have.property('callCount',1)
})
  it('should render the navigation component',()=>{
    const wrapper = shallow(<HomeScreen children={true} user={user}/>)
    assert.equal(wrapper.find('Navigation').length,1)
  })
})
