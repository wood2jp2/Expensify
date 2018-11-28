import {createStore, combineReducers} from 'redux'

store.subscribe(() => {
    const state = store.getState()
    
    console.log(getVisibleExpenses(state.expenses, state.filters))
})

const expenseOne = store.dispatch(addExpense({description: 'rent', note: 'any note', amount: 30, createdAt: 3333}))
const expenseTwo = store.dispatch(addExpense({description: 'coffee', note: 'starbucks', amount: 400, createdAt: 422}))
const expenseThree = store.dispatch(addExpense({description: 'dinner', note: 'halal', amount: 250, createdAt: 2000}))

// store.dispatch(removeExpense({id: expenseTwo.expense.id}))
// store.dispatch(editExpense(expenseOne.expense.id, {amount: 5000, description: 'rent went up'}))

// store.dispatch(setTextFilter('en'))

store.dispatch(sortByAmount())
store.dispatch(sortByDate())

// store.dispatch(setStartDate(100))
// store.dispatch(setEndDate(1000))

const demoState = {
    expenses: [{
        id: 'fdsadf',
        description: 'Jan rent',
        note: 'Final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
}

var person = {
    name: 'josh',
    age: 43,
    something: 'anything'
}

// console.log({...person, another: 'some', age: 42})