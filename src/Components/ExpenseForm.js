import React, { Component } from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends Component {

    state = {
        description: this.props.description || '',
        amount: this.props.amount ? (this.props.amount / 100).toString() : '',
        note: this.props.note || '',
        createdAt: moment(this.props.createdAt) || moment(),
        calendarFocused: false,
        error: ''
    }

    onDescriptionChange = e => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onAmountChange = e => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onNoteChange = e => {
        const note = e.target.value
        this.setState(() => ({note}))
    }

    onDateChange = createdAt => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }

    onSubmit = e => {
        e.preventDefault()
        if (!this.state.description || !this.state.amount) {
            // Please provide description and amount
            this.setState(() => ({error: 'Please provide a description and amount within the fields.'}))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    onFocusChange = ({focused}) => this.setState(() => ({calendarFocused: focused}))

    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}

                <form onSubmit={this.onSubmit}>
                {/* autoFocus puts the cursor automatically in that field on load */}
                    <input 
                        autoFocus 
                        placeholder="Description" 
                        type="text"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />
                    <input 
                        placeholder="Amount" 
                        type="text"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        id=""
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)."
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    ></textarea>
                    <button
                        // disabled={!this.state.description || !this.state.amount}
                    >Add Expense</button>
                </form>
            </div>
        )
    }
}

 