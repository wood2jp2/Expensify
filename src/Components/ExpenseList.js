import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../Selectors/expenses'

const ExpenseList = props => (
    <div>
        <h1>ExpenseList</h1>
        {props.expenses && props.expenses.map((expense, i) => 
            <ExpenseListItem 
                key={i}
                {...expense} />)}
    </div>
)

const mapStateToProps = state => ({
    expenses: selectExpenses(state.expenses, state.filters)
})

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)

export default ConnectedExpenseList