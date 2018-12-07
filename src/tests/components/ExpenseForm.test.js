import React from 'react'
import { shallow } from 'enzyme'
import ExpenseForm from '../../Components/ExpenseForm'
import { expenses } from '../fixtures/expenses'

test("render ExpenseForm correctly", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test("should render ExpenseForm with expense data", () => {
    const wrapper = shallow(<ExpenseForm {...expenses[2]} />)
    expect(wrapper).toMatchSnapshot()
})

test("should render the error if a blank form is submitted", () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()

    wrapper.find('form').simulate('submit', {preventDefault:() => {}})
    expect(wrapper.state('error')).toBe('Please provide a description and amount within the fields.')
    expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('input[placeholder="Description"]').simulate('change', { target: { value: 'howdy'}})

    // OR use wrapper.find('input').at(0)
    expect(wrapper).toMatchSnapshot()
})

test("should set note on note change", () => {
    const wrapper = shallow(<ExpenseForm />),
          value = 'new note';
    wrapper.find('textarea').simulate('change', { target: { value }})
    expect(wrapper.state('note')).toBe(value)
})

test("should not set amount on state due to invalid input", () => {
    const wrapper = shallow(<ExpenseForm />),
          value = '12.122';
    wrapper.find('input').at(1).simulate('change', { target: { value }})
    expect(wrapper.state('amount')).toBe('')
})

test("should set state amount due to valid input", () => {
    const wrapper = shallow(<ExpenseForm />),
          value = '23.50';
    
    wrapper.find('input[placeholder="Amount"]').simulate('change', { target: { value }})
    expect(wrapper.state('amount')).toBe(value)
})