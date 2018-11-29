import React from 'react'
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../Actions/filters'

const ExpenseListFilters = ({filters, dispatch}) => (
    <div>
        <input 
            type='text' 
            value={filters.text} 
            onChange={ e => dispatch(setTextFilter(e.target.value))}
        />
        <select 
            value={filters.sortBy}
            onChange={ e => 
                e.target.value === 'date' ? 
                    dispatch(sortByDate()) : 
                    dispatch(sortByAmount())
            }>
            <option value="date">Date Created</option>
            <option value="amount">Amount</option>
        </select>
    </div>
)

const mapStateToProps = state => ({
    filters: state.filters
})

const ConnectedExpenseListFilters = connect(mapStateToProps)(ExpenseListFilters)

export default ConnectedExpenseListFilters