import React from 'react'
import DOM from 'react-dom'

const app = document.getElementById('app')

const Info = props => (
    <div>
        <h1>Info:</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = WrappedComponent => (
    // CURRYING
    props => (
        <div>
            {!props.isAdmin && <p>This is private info. Please do NOT share!</p>}
            <WrappedComponent {...props}/>
        </div> 
    )
)

const requireAuthentication = WrappedComponent => (
    props => (
        <div>
            {!props.isAuthenticated ?
            <p>Please log in to view this information</p> : 
            (<div>
                <p>This is some info, since you are authenticated</p>
                <WrappedComponent {...props} />    
                </div>
            )}
        </div>
    )
)

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// DOM.render(<AdminInfo isAdmin={true} info="sdfdf"/>, app)
DOM.render(<AuthInfo isAuthenticated={true} info="INFO"/>, app)
