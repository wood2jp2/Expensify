import React from 'react'
import { connect } from 'react-redux'
import { removeExpense } from '../Actions/expenses'

const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p>Amount: {amount}</p>
        <p>Created At: {createdAt}</p>
        <button onClick={ () => {
            dispatch(removeExpense({id}))
        }}>Remove</button>
    </div>
)

const ConnectedExpenseListItem = connect()(ExpenseListItem)

export default ConnectedExpenseListItem