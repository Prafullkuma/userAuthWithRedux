import React from 'react'
import FormNotes from './FormNotes'
import {editNotes} from '../../../actions/notesAction'
import { useDispatch } from 'react-redux'
const EditFrom = (props) => {
    const {id,title,body,handleToggle}=props
    
    const dispatch=useDispatch()

    const formSubmission=(formData)=>{
        dispatch(editNotes(formData))
        
    }

    return (
        <div>
            <FormNotes id={id} title={title} body={body} formSubmission={formSubmission} handleToggle={handleToggle}/>
        </div>
    )
}

export default EditFrom
