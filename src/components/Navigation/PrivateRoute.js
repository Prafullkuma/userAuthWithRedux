import React from 'react'
import {  Route,Redirect } from 'react-router-dom'


const PrivateRoute = ({component:Component,...rest}) => {
        //...rest return and object with path and component function
        // component which names as alies  
        return(
                <Route {...rest} render={(props)=>{
                       localStorage.getItem('token')
                       ? 
                         <Component {...props}/>
                        :
                        <Redirect to="/"/>
                }}/>
        )

}

export default PrivateRoute
