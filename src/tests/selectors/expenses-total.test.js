import selectExpenseTotal from '../../Selectors/expenses-total'
import { expenses } from '../fixtures/expenses'

test("should return 0 due to no expenses", () => {
    expect(selectExpenseTotal([])).toBe(0)
})

test("should return a value due to one expense", () => {
    expect(selectExpenseTotal([expenses[0]])).toBe(195)
    
})

test("should return total of all expenses", () => {
    expect(selectExpenseTotal(expenses)).toBe(47145)
})