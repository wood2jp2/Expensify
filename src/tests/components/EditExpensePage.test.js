import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../Components/EditExpensePage'
import { expenses } from '../fixtures/expenses'

let editExpense, removeExpense, history, wrapper;
 
beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage expense={expenses[0]} history={history} removeExpense={removeExpense} editExpense={editExpense}/>)
})

test("should render EditExpensePage", () => {
    expect(wrapper).toMatchSnapshot()
})

test("should edit an expense", () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])

    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
})

test("should remove expense", () => {
    wrapper.find('button').simulate('click')

    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[0].id})
})