import React ,{useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllNotes} from '../../../actions/notesAction'
import NotesListItem from './NotesListItem'

const NotesList = () => {
    const dispatch=useDispatch()

    const notes=useSelector((state)=>{
        return state.notes
    })

    useEffect(() => {
        dispatch(getAllNotes())
    }, [dispatch])
    
    return (
        <div>

            {notes && notes.length===0 ?
                <div>
                    <h1>Notes List is empty </h1>
                    <h1>Add your first note</h1>
                </div>
                :<div>
                    <h1>Notes list-{notes.length}</h1>
                    <ul>
                            {notes.map((ele)=>{
                                return <NotesListItem key={ele._id} {...ele}/>
                            })}
                    </ul>
                </div>     
        }
        </div>
    )
}

export default NotesList
