import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../Components/ExpenseList'
import { expenses } from '../fixtures/expenses'

test("should render the ExpenseList with expenses", () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

test("should render ExpenseList with empty message", () => {
    const wrapper = shallow(<ExpenseList expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})