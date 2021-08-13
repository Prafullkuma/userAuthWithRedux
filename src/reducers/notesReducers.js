const initialStateValue=[]

const notesReducers = (state=initialStateValue,action) => {
    switch (action.type) {
        case 'ADD_NOTES':{
            return [action.payload,...state]
        }
        
        case 'GET_ALL_NOTES':{
            return action.payload
        }

        case 'DELETE_NOTES':{
            return state.filter((ele)=>{
                return ele._id !== action.payload._id
            })
        }
        
        case 'EDIT_NOTES':{
            return state.map((ele)=>{
                if(ele._id ===action.payload._id){
                    return {...ele,...action.payload}
                }else{
                    return {...ele}
                }
            })
        }

        default:
            return [...state]
    }   
}

export default notesReducers

