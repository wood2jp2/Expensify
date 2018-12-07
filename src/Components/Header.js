import {NavLink} from 'react-router-dom'
import React from 'react'

const Header = () => (
    <div>
        <header>
            <h1>Expensify</h1>
            <NavLink exact to='/' activeClassName='is-active' >Dashboard</NavLink>
            <NavLink to='/create' activeClassName='is-active' >Create Expense</NavLink>
        </header>
    </div>
)

export default Header