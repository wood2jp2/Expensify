import React, { Component } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

var now = moment()

console.log(now.format("MMM Do, YYYY"))

export default class ExpenseForm extends Component {
    state = {
        description: '',
        amount: '',
        note: ''
    }

    onDescriptionChange = e => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onAmountChange = e => {
        const amount = e.target.value
        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onNoteChange = e => {
        const note = e.target.value
        this.setState(() => ({note}))
    }

    render() {
        return (
            <div>
                <form onSubmit={ e => {
                    e.preventDefault()
                    console.log('fdsadsfdsasdfdsasdfdsad')
                }}>
                {/* autoFocus puts the cursor automatically in that field on load */}
                    <input 
                        autoFocus 
                        placeholder="Description" 
                        type="text"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    ></input>
                    <input 
                        placeholder="Amount" 
                        type="text"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    ></input>
                    <textarea
                        placeholder="Add a note for your expense (optional)."
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}