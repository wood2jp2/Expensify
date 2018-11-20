import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        Not Found!
        <p><Link to='/'>Go Back to Home</Link></p>
    </div>
)

export default NotFoundPage