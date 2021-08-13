import React, { useState ,useEffect} from 'react'
import { v4 as uuidv4} from 'uuid'

const FormNotes = ({ formSubmission,handleIsSaved,isSaved,id:Eid,title:Etitle,body:Ebody,handleToggle}) => {

    const [id,setId]=useState( Eid ? Eid :uuidv4())
    const [title,setTitle]=useState(Etitle ? Etitle :'')
    const [body,setBody]=useState(Ebody ?Ebody:'')

    useEffect(()=>{
        if(isSaved){
            setId(uuidv4())
            setBody('')
            setTitle('')
            handleIsSaved()
        }
    },[isSaved,handleIsSaved])

    const handleChange=(e)=>{
        const attr=e.target.name
        if(attr==="title"){
            setTitle(e.target.value)
        }
        else if(attr==="body"){
            setBody(e.target.value)
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:id,
            title:title,
            body:body
        }
        if(handleToggle){
            handleToggle()
        }
        formSubmission(formData)    
    }
    return (
        <div>
             <h1> { Eid ? 'Edit from' : 'Form note'}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={handleChange} placeholder="Enter Title" name="title"/><br/><br/>
                    <textarea value={body} onChange={handleChange} name="body">
                    </textarea> 
                    <br/><br/>
                <input type="submit" value="add notes"/>
            </form>
        </div>
    )
}

export default FormNotes
