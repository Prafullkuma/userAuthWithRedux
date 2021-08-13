import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteNotes} from '../../../actions/notesAction'
import EditFrom from './EditFrom'

const NotesListItem = (props) => {

    const {_id,title,body}=props
    
    const [toggle,setToggle]=useState(false)

    const dispatch = useDispatch()

    const deleteHandle=(id)=>{
        const sure=window.confirm("Are you sure")
        if(sure){
            dispatch(deleteNotes(id))
        }
     }
    const handleToggle=()=>{
        setToggle(!toggle)
    }

    return (
        <div>
            <li>{title}-{body}
               <button onClick={()=>deleteHandle(_id)}>Delete</button>
               {toggle  ?
                <div>   
                    <EditFrom id={_id} title={title} body={body} handleToggle={handleToggle} />
                    <button onClick={handleToggle}>Cancel</button>
                </div>:
                <div>
                     <button onClick={handleToggle}>Edit</button> 
                </div> 
               }            
               </li>
        </div>
    )
}

export default NotesListItem
