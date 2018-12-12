import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import AppRouter from './Routers/AppRouter'
import configureStore from './Store/configureStore'

import { addExpense, removeExpense, editExpense } from './Actions/expenses'
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from './Actions/filters'
import getVisibleExpenses from './Selectors/expenses'

import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

store.subscribe(() => {
    const 
        state = store.getState(),
        {expenses, filters} = state;

    console.log(getVisibleExpenses(expenses, filters))
})

// store.dispatch(setTextFilter('bill'))
// store.dispatch(setTextFilter('water'))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

