import React from 'react'
import { shallow } from 'enzyme'
import { expenses } from '../fixtures/expenses'
import ExpenseListItem from '../../Components/ExpenseListItem'

test("should render an expenseListItem", () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)

    expect(wrapper).toMatchSnapshot()
    // expect(wrapper.instance().props).toBe(195)
})