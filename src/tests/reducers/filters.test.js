import filtersReducer from '../../Reducers/filters'
import moment from 'moment'

test("should set up default filters", () => {
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test("should set sortBy to amount", () => {
    const state = filtersReducer(undefined, {type: "SORT_BY_AMOUNT"})
    expect(state.sortBy).toBe('amount')
})

test("should set sortBy to date", () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type: "SORT_BY_DATE"}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test("should set startDate", () => {
    const state = filtersReducer(undefined, {type: "SET_START_DATE", startDate: moment(0)})
    expect(state.startDate).toEqual(moment(0))
})

test("should set endDate", () => {
    const state = filtersReducer(undefined, {type: "SET_END_DATE", endDate: moment(0)})
    expect(state.endDate).toEqual(moment(0))
})

test("should set up text filter", () => {
    const state = filtersReducer(undefined, {type: "SET_TEXT_FILTER", text: 'something'})
    expect(state.text).toBe('something')
})