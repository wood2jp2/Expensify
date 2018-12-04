import expensesReducer from '../../Reducers/expenses'
import {expenses} from '../fixtures/expenses'

test("set default state for expenses", () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test("add expense to state", () => {
    const expense = {
        id: 999,
        description: 'laptop',
        note: 'note',
        amount: 1300,
        createdAt: 20000
    }
    const action = {
        type: "ADD_EXPENSE", 
        expense 
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test("remove expense from state by id", () => {
    const action = {type: "REMOVE_EXPENSE", id: expenses[0].id }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1], expenses[2]])
})

test("should not remove expenses if ID isn't found", () => {
    const action = {type: "REMOVE_EXPENSE", id: "43" }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test("edit expense on state", () => {
    const expenseToEdit = {type: "EDIT_EXPENSE", id: expenses[1].id, updates: {description: "new description"}}
    const state = expensesReducer(expenses, expenseToEdit)
    expect(state).toEqual([
        expenses[0],
        {...expenses[1], ...expenseToEdit.updates},
        expenses[2]
    ])
})

test("should not edit expense on state if ID isn't found", () => {
    const expenseToEdit = {type: "EDIT_EXPENSE", id: "23", updates: {description: "new description"}}
    const state = expensesReducer(expenses, expenseToEdit)
    expect(state).toEqual(state)
})