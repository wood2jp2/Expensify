import React, { Component } from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../Actions/expenses'

export class EditExpensePage extends Component {

    onSubmit = expense => {
        this.props.editExpense(expense.id, expense)
        this.props.history.push('/')
    }

    onClick = () => {
        this.props.removeExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <ExpenseForm 
                    { ...this.props.expense } 
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onClick}>Remove</button>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({ expense: state.expenses.find( expense => expense.id === props.match.params.id) })

const mapDispatchToProps = dispatch => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense:  ({ id }) => dispatch(removeExpense({ id }))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)