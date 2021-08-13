import React,{useState,useEffect} from 'react'
import AuthComponent from './components/AuthComponent'

const App = () => {
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    
    const handleAuth=()=>{
        setIsLoggedIn(!isLoggedIn)
    }

    useEffect(()=>{
        if(localStorage.getItem('token')){
            handleAuth()
        }
    },[])
    return (
        <div>
            <h1>App</h1>
            <AuthComponent isLoggedIn={isLoggedIn} handleAuth={handleAuth}/>
        </div>
    )
}

export default App
