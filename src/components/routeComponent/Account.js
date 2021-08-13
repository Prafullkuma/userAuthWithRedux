import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Account = () => {
    const [details,setDetails]=useState({})
  
     useEffect(()=>{
         axios.get('http://dct-user-auth.herokuapp.com/users/account',{
             headers:{
                 'x-auth':localStorage.getItem('token')
             }
         })
         .then((res)=>{
             const result=res.data
             setDetails(result)
         })
         .catch((err)=>{
             alert(err.message)
         })
     },[])
    return (
        <div>
            <h1>Account info</h1>  
            {details&&
             <div>
                 <h1>{details.username}</h1>
                 <h1>{details.email}</h1>
            </div>}
        </div>
    )
}

export default Account
