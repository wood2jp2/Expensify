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

// returns object that is the action.
const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})

// Expenses Reducer and default values
const expensesReducerDefaultState = []

// The action is the result of the action functions above 
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case "ADD_EXPENSE":
            return [...state, action.expense]
        case "REMOVE_EXPENSE":
            return state.filter(({ id }) => id !== action.id)
        case "EDIT_EXPENSE":
            return state.map(expense => {
                return expense.id === action.id ?
                    {...expense, ...action.updates} :
                    expense
            })
        default: 
            return state 
    }
}

// Filters actions

const setTextFilter = (text = '') => ({ 
    type: "SET_TEXT_FILTER", 
    text 
})

const setStartDate = startDate => ({
    type: "SET_START_DATE",
    startDate
})

const setEndDate = endDate => ({
    type: "SET_END_DATE",
    endDate
})

const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
})

const sortByDate = () => ({
    type: "SORT_BY_DATE",
})

// Filters reducer
const filtersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        case "SET_TEXT_FILTER":
            return {...state, text: action.text}
        case "SORT_BY_AMOUNT": 
            return {...state, sortBy: 'amount'}
        case "SORT_BY_DATE":
            return {...state, sortBy: 'date'}
        case "SET_START_DATE":
            return {...state, startDate: action.startDate}
        case "SET_END_DATE": 
            return {...state, endDate: action.endDate}
        default: 
            return state
    }
}

const getVisibleExpenses = (expensesState, {text, sortBy, startDate, endDate}) => {
    return expensesState.filter(expense => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch  = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) 

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
    })
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    
    console.log(getVisibleExpenses(state.expenses, state.filters))
})

const expenseOne = store.dispatch(addExpense({description: 'rent', note: 'any note', amount: 4300, createdAt: 900}))
const expenseTwo = store.dispatch(addExpense({description: 'coffee', note: 'starbucks', amount: 400, createdAt: 9900}))

// store.dispatch(removeExpense({id: expenseTwo.expense.id}))
// store.dispatch(editExpense(expenseOne.expense.id, {amount: 5000, description: 'rent went up'}))

// store.dispatch(setTextFilter('en'))

store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())

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