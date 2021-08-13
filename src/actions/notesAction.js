import axios from 'axios'

export const addNotes=(formData)=>{
    return (dispatch)=>{
        axios.post('http://dct-user-auth.herokuapp.com/api/notes',formData,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result=res.data
            if(result.errors){
                return alert(result.message)
            }
          dispatch({type:"ADD_NOTES",payload:result})
        })
        .catch((err)=>{
            alert(err.message) 
        })
    }
}
export const getAllNotes=()=>{
        return (dispatch)=>{
            axios.get('http://dct-user-auth.herokuapp.com/api/notes',{
                headers:{
                    'x-auth':localStorage.getItem('token')
                }
            })
            .then((res)=>{
                const result=res.data 
                if(result.errors){
                    alert(result.message)
                }
                dispatch({ type:'GET_ALL_NOTES',payload:result})              
            })
            .catch((err)=>{
                alert(err.message)
            })
        } 
}

export const deleteNotes=(id)=>{
    return (dispatch)=>{
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result=res.data
            if(result.errors){
                return alert(result.message)
            }
            dispatch({type:'DELETE_NOTES',payload:result})
        })
    }
}

export const editNotes=(formData)=>{
    
    return (dispatch)=>{
        axios.put(`http://dct-user-auth.herokuapp.com/api/notes/${formData.id}`,formData,{
            headers:{
                'x-auth':localStorage.getItem('token')
            }
        })
        .then((res)=>{
            const result=res.data
            if(result.errors){
                return alert(result.message)
            }
            dispatch({type:'EDIT_NOTES',payload:result})
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}