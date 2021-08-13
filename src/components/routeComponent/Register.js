import React, {  useState } from 'react'
import { useDispatch } from 'react-redux';
import { userRegisterAction} from '../../actions/userAction'
import { v4 as uuidv4 } from 'uuid';

const Register = (props) => {
    
    const [id,setId]=useState(uuidv4())
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const dispatch=useDispatch()

    const handleChange=(e)=>{
        const attr=e.target.name
        if(attr==="username"){
            setUsername(e.target.value)
        }
        else if(attr==='email'){
            setEmail(e.target.value)
        }
        else if(attr==="password"){
            setPassword(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        
        const formData={
            id:id,
            username:username,
            email:email,
            password:password
        }
        const successMessage=()=>{
            alert("Registered successfully")
        }
        const clearForm=()=>{
            setId(uuidv4())
            setEmail('')
            setUsername('')
            setPassword('')
        }
        dispatch(userRegisterAction(formData,successMessage,clearForm,props.history))
    }

    return (
        <div>

        <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                    <input type="text" name="username" value={username} onChange={handleChange} placeholder="Enter username"/><br/><br/>
                    <input type="text" name="email" value={email} onChange={handleChange} placeholder="Enter email"/><br/><br/>
                    <input type="text" name="password" value={password} onChange={handleChange} placeholder="Enter password"/><br/><br/>
                    <input type="submit" value="register"/>
            </form>
        </div>
    )
}

export default Register
