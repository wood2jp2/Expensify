import {combineReducers, createStore} from 'redux'
import expensesReducer from '../Reducers/expenses'
import filtersReducer from '../Reducers/filters'

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        })
    )

    return store
}

