import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../Components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'
import moment from 'moment'

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByAmount = jest.fn()
    sortByDate = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters 
        filters={filters}
        setStartDate={setStartDate} 
        setEndDate={setEndDate} 
        setTextFilter={setTextFilter} 
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        />)
})

test("should render ExpenseListFilters correctly", () => {
    expect(wrapper).toMatchSnapshot()
})

test("should render alt ExpenseListFilters data correctly", () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test("Should handle text change", () => {
    wrapper.find('input').simulate('change', {target: {value: altFilters.text}})
    expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text)
})

test("should sort by date", () => {
    const value = 'date'
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {target: { value }})
    expect(sortByDate).toHaveBeenCalled()
})

test("should sort by amount", () => {
    const value = 'amount'
    wrapper.find('select').simulate('change', {target: { value }})
    expect(sortByAmount).toHaveBeenCalled()
})

test("should handle date changes", () => {
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)

})

test("should handle date focus changes", () => {
    const calendarFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})