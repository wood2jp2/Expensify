import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../Components/AddExpensePage'
import { expenses } from '../fixtures/expenses'

let onSubmitSpy, history, wrapper;

beforeEach(() => {
    onSubmitSpy = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<AddExpensePage history={history} addExpense={onSubmitSpy}/>)
})

test("should render add expense page", () => {
    expect(wrapper).toMatchSnapshot()
})

test("should handle onSubmit", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])

    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0])
})
