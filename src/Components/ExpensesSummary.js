import React from 'react'
import { connect } from 'react-redux'
import totalExpenses from '../Selectors/expenses-total'
import numeral from 'numeral'
import getVisibleExpenses from '../Selectors/expenses'

export const ExpensesSummary = (props) => {

    const visibleExpenses = getVisibleExpenses(props.expenses, props.filters),
        expenseWord = props.expenses.length != 1 ? 'expenses' : 'expense',
        formattedExpenseTotal = numeral(totalExpenses(visibleExpenses)/100).format('$0,0.00');
    
    return (
        <div>
            <h1>
                Viewing {visibleExpenses.length} {expenseWord} with a total of {formattedExpenseTotal}
            </h1>
        </div>
    )
}

const mapStateToProps = store => ({
    expenses: store.expenses,
    filters: store.filters
})

export default connect(mapStateToProps)(ExpensesSummary)