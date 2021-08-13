import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLoginAction } from '../../actions/userAction'

const Login = (props) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const { handleAuth }=props

    const dispatch = useDispatch()

    const handleChange=(e)=>{
        const attr=e.target.name
        if(attr==="email"){
            setEmail(e.target.value)
        }
        else if(attr==="password"){
            setPassword(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            email:email,
            password:password
        }  
        const successMessage=()=>{
            alert("Login successfully")
        }
        const clearForm=()=>{
            setEmail('')
            setPassword('')
        }
        dispatch(userLoginAction(formData,successMessage,clearForm,props.history,handleAuth))
    }
    
    return (
        <div>
         <h1>Login</h1>

         <form onSubmit={handleSubmit}>
            <input type="text" value={email} name="email" onChange={handleChange} placeholder="Enter email"/><br/><br/>
            <input type="text" value={password}  name="password" onChange={handleChange} placeholder="Enter password"/><br/><br/>
            <input type="submit" value="login"/>     
        </form>       
        </div>
    )
}

export default Login
