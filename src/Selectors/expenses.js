export default (expensesState, {text, sortBy, startDate, endDate}) => {
    return expensesState.filter(expense => {
        const 
             startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate,
             endDateMatch  = typeof endDate !== 'number' || expense.createdAt <= endDate,
             textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        // Should be sorted most recent expense to oldest expense
        if (sortBy === 'date') {
            return b.createdAt - a.createdAt 
        } 
        // Should be sorted most expensive to least expensive
        else if (sortBy === 'amount') {
            return b.amount - a.amount
        }
    })
}