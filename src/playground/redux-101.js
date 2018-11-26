import {createStore} from 'redux'

// Action Generators: functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) => (
    { 
        incrementBy: incrementBy,
        type: 'INCREMENT' 
    }
)

const decrementCount = ({ decrementBy = 1 } = {}) => (
    { 
        decrementBy: decrementBy,
        type: 'DECREMENT' 
    }
)

const resetCount = () => ({type: "RESET"})

const setCount = ({count} = {}) => (
    {
        type: "SET",
        count
    }
)

// Reducers: take in actions and change the state accordingly.

const countReducer = (state = {count: 0}, {type, incrementBy, decrementBy, count}) => {

    switch (type) {
        case "INCREMENT":
            return {
                count: state.count + incrementBy
            };
        case "DECREMENT": 
            return {
                count: state.count - decrementBy
            };
        case "SET":
            return {
                count: count
            }
        case "RESET":
            return {
                count: 0
            };
        default: 
            return state
    }
}

const store = createStore(countReducer)

// const unsubscribe = store.subscribe(() => console.log(store.getState()))
store.subscribe(() => console.log(store.getState()))
// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// })

// unsubscribe()

store.dispatch(incrementCount({incrementBy: 21}))
store.dispatch(incrementCount())

store.dispatch(resetCount())

store.dispatch(decrementCount({decrementBy: 265}))
store.dispatch(decrementCount())

store.dispatch(setCount({count: 3233}))