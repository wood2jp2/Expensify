import {createStore, combineReducers} from 'redux'
import uuid from 'uuid'

// Actions

const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

const removeExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id
})

// Expenses Reducer and default values
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense]
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id)
        case "EDIT_EXPENSE":
            return 
        default: 
            return state 
    }
}

// Filters reducer
const filtersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        case "SORT_BY_AMOUNT": 
            return 
        case "SORT_BY_DATE":
            return 
        default: 
            return state
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => console.log(store.getState()))

const expenseOne = store.dispatch(addExpense({description: 'rent', note: 'any note', amount: 4300}))
const expenseTwo = store.dispatch(addExpense({description: 'coffee', note: 'starbucks', amount: 400}))

store.dispatch(removeExpense({id: expenseTwo.expense.id}))

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