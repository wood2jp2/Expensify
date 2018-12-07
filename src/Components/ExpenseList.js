import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../Selectors/expenses'

export const ExpenseList = props => (
    <div>
    {
        props.expenses.length === 0 ? (
            <p>There are no expenses to display</p>
        ) : (props.expenses && props.expenses.map((expense, i) => 
            <ExpenseListItem 
                key={i}
                {...expense} />)
        )
    }
        
    </div>
)

const mapStateToProps = state => ({
    expenses: selectExpenses(state.expenses, state.filters)
})

const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList)

export default ConnectedExpenseList