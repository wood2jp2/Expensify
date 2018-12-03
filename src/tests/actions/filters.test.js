import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../../Actions/filters'
import moment from 'moment'

test("set text filter using default value with no parameter given", () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: ''
    })
})

test("set text filter using provided parameter value", () => {
    const action = setTextFilter('Bill')
    expect(action).toEqual({
        type: "SET_TEXT_FILTER",
        text: 'Bill'
    })
})

test("set start date using provided parameter date", () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
})

test("set end date using provided parameter date", () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
})

test("set sort by amount", () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: "SORT_BY_AMOUNT"
    })
})

test("set sort by date", () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: "SORT_BY_DATE"
    })
})