import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Header from '../../Components/Header'

test('should render Header component correctly', () => {
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()

    // expect(wrapper.find('NavLink').parent().get()).toBe('header')

    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
    
})
