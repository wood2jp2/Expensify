import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setEndDate, setStartDate } from '../Actions/filters'

import { DateRangePicker } from 'react-dates'

class ExpenseListFilters extends Component {

    state = {
        calendarFocused: null
    }

    onDatesChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }

    onFocusChange = calendarFocused => this.setState(() => ({ calendarFocused }))
    
    render() {
        return (
            <div>
                <input 
                    type='text' 
                    value={this.props.filters.text} 
                    onChange={ e => this.props.dispatch(setTextFilter(e.target.value))}
                />
                <select 
                    value={this.props.filters.sortBy}
                    onChange={ e => 
                        e.target.value === 'date' ? 
                            this.props.dispatch(sortByDate()) : 
                            this.props.dispatch(sortByAmount())
                    }>
                    <option value="date">Date Created</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    filters: state.filters
})

const ConnectedExpenseListFilters = connect(mapStateToProps)(ExpenseListFilters)

export default ConnectedExpenseListFilters