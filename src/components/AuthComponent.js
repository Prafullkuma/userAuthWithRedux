import React from 'react'
import NavBar from './Navigation/NavBar'

const AuthComponent = ({isLoggedIn,handleAuth}) => {

    return (
        <div>
             <NavBar isLoggedIn={isLoggedIn} handleAuth={handleAuth} />       
        </div>
    )
}

export default AuthComponent
