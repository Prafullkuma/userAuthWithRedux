import React  from 'react'
import { Link, Route,Router,withRouter } from 'react-router-dom'
import Home from '../routeComponent/Home'
import Register from '../routeComponent/Register'
import Login from '../routeComponent/Login'
import Mynotes from '../routeComponent/Mynotes/Mynotes'
import Account from '../routeComponent/Account'

const NavBar = (props) => {
    
    const {isLoggedIn,handleAuth}=props

    return (
        <div>
            <div >
                <Link to="/">Home</Link>
                {isLoggedIn ?
                    <>
                    <Link to="/account" style={{margin:'20px'}}>Account</Link>
                    <Link to="/mynotes" style={{margin:'20px'}}>My notes</Link>
                    <Link to="#" onClick={()=>{
                        alert("sucessfully logged out")
                        localStorage.removeItem('token')   
                        props.history.push('/')
                        handleAuth()
                    }}>Logout</Link>
                    </>
                    :
                    <>
                        <Link to="/register" style={{margin:'20px'}}>register</Link>
                        <Link to='/login'>Login</Link>
                    </>
                 }
            </div>
            <Route path="/" component={Home} exact/>
            <Route path="/register" component={Register} />
            <Route path="/login" render={(props)=><Login {...props} handleAuth={handleAuth}/>} />
            <Route path="/account" component={Account}/>
            <Route path="/mynotes" component={Mynotes}/>

        </div>
    )
    
}

export default withRouter(NavBar) 
