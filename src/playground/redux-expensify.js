import {createStore, combineReducers} from 'redux'

// Expenses Reducer
const expensesReducerDefaultState = []
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense]
        case "REMOVE_EXPENSE":
            return [...state]
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

console.log(store.getState())

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