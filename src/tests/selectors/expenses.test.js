import selectExpenses from '../../Selectors/expenses'
import moment from 'moment'
import {expenses} from '../fixtures/expenses'

test("should filter by text value", () => {
    const result = selectExpenses(expenses, {text: 'e', sortBy: 'date', startDate: undefined, endDate: undefined})
    expect(result).toEqual([expenses[2], expenses[1]])
})

// Filters out dates BEFORE the start date
test("Should filter by start date", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters) 
    expect(result).toEqual([
        expenses[2],
        expenses[0]
    ])
})

// Should filter out end dates AFTER given value
test("Should filter by end date", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = selectExpenses(expenses, filters) 
    expect(result).toEqual([
        expenses[0],
        expenses[1]
    ])
})

test("Should sort by date", () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters) 
    expect(result).toEqual([
        expenses[2],
        expenses[0],
        expenses[1]
    ])
})

test("Should sort by amount", () => {
    const filters = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = selectExpenses(expenses, filters) 
    expect(result).toEqual([
        expenses[2],
        expenses[1],
        expenses[0]
    ])
})