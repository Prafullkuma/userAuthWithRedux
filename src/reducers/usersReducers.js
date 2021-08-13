const initailStateValue={}

const usersReducers = (state=initailStateValue,action) => {
    
    switch(action.type){
        case 'REGISTER_USER':{
          return action.payload
        }
        case 'LOGIN_USER':{
            return {...state,...{message:"login successfully"}}
        }
        default:{
            return {...state}
        }
    }
}
export default usersReducers
