import moment from 'moment'

export default (expensesState, {text, sortBy, startDate, endDate}) => {
    return expensesState.filter(expense => {
        const 
             createdAtMoment = moment(expense.createdAt),
             startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true,
             endDateMatch  = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true,
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