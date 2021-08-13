import React ,{useState}from 'react'
import FormNotes from './FormNotes'
import {addNotes} from '../../../actions/notesAction'
import { useDispatch} from 'react-redux'

const AddNotes = () => {
    const [isSaved,setIsSaved]=useState(false)
     
    const  dispatch = useDispatch()
    
    const handleIsSaved=()=>{
        setIsSaved(!isSaved)
    }

    const formSubmission=(formData)=>{
        dispatch(addNotes(formData))
        setIsSaved(true)
    }

    return (
        <div>
            <FormNotes formSubmission={formSubmission} handleIsSaved={handleIsSaved} isSaved={isSaved} />
        </div>
    )
}

export default AddNotes
