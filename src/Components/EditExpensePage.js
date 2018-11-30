import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../Actions/expenses'

const EditExpensePage = props => {
    return (
        <div>
            <ExpenseForm 
                { ...props.expense } 
                onSubmit={ expense => {
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/')
                }}
            />
            <button onClick={ () => {
                props.dispatch(removeExpense({id: props.expense.id}))
                props.history.push('/')
            }}>Remove</button>
        </div>
    )
}


const mapStateToProps = (state, props) => ({ expense: state.expenses.find( expense => expense.id === props.match.params.id) })

export default connect(mapStateToProps)(EditExpensePage)