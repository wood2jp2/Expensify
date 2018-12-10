import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../Components/AddExpensePage'
import { expenses } from '../fixtures/expenses'

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<AddExpensePage history={history} addExpense={addExpense}/>)
})

test("should render add expense page", () => {
    expect(wrapper).toMatchSnapshot()
})

test("should handle onSubmit", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])

    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0])
})
