import { addExpense, editExpense, removeExpense } from '../../Actions/expenses'

test('should setup remove expense action object', () => {
    const result = removeExpense({ id: '32123' })
    expect(result).toEqual({
        type: "REMOVE_EXPENSE",
        id: '32123'
    })
})

test("should return an edit expense object", () => {
    const result = editExpense('32123', {note: 'newValue'})
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id: '32123',
        updates: {
            note: 'newValue'
        }
    })
})

test("should return an add expense default object", () => {
    const defaultValues = { 
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0
    }
    const result = addExpense()
    expect(result).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            ...defaultValues
        }
    })
})

test("should return an add expense object with provided values", () => {
    const expenseData = {
        description: 'test description', 
        amount: 999, 
        createdAt: 111, 
        note: 'test note'
    }
    const action = addExpense(expenseData)
    
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            ...expenseData
        }
    })
})