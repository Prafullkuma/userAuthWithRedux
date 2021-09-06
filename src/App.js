import React,{useState} from 'react'
import AuthComponent from './components/AuthComponent'

const App = () => {
    const [isLoggedIn,setIsLoggedIn]=useState(false)
    
    const handleAuth=()=>{
        setIsLoggedIn(!isLoggedIn)
    }

    return (
        <div>
            <AuthComponent isLoggedIn={isLoggedIn} handleAuth={handleAuth}/>
        </div>
    )
}

export default App
