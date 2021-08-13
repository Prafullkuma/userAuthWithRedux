import axios from 'axios'

export const userRegisterAction=(formData,successMessage, clearForm,sendLink)=>{

    return (dispatch)=>{
        axios.post('http://dct-user-auth.herokuapp.com/users/register',formData)
        .then((res)=>{
            const result=res.data
            if(result.errors){
              return  alert(result.message)
            }

            successMessage()
            dispatch({type:"REGISTER_USER",payload:result})
            clearForm()
            sendLink.push('/login')
        })
        .catch((err)=>{
            alert (err.message)
        })
    } 
}

export const userLoginAction=(formData,successMessage,clearForm,sendLink,handleAuth)=>{
    return (dispatch)=>{
        axios.post('http://dct-user-auth.herokuapp.com/users/login',formData)
        .then((res)=>{
            const result=res.data
            if(result.errors){
                return alert(result.message)
            }
            localStorage.setItem('token',result.token)
            successMessage()
            dispatch({type:'LOGIN_USER',payload:result})      
            sendLink.push('/')     
            handleAuth()
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}