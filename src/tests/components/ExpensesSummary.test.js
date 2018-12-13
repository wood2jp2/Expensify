import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../Components/ExpensesSummary'
import { expenses } from '../fixtures/expenses'
import {filters, altFilters} from '../fixtures/filters'

test("expect one expense with a total of 195", () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} filters={filters}/>)
    expect(wrapper).toMatchSnapshot()
})

test("expect multiple with a total of 94.34", () => {
    const wrapper = shallow(<ExpensesSummary expenses={expenses} filters={filters}/>)
    expect(wrapper).toMatchSnapshot()
})
