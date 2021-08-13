import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import usersReducers from '../reducers/usersReducers'
import notesReducers from '../reducers/notesReducers'

const configureStore = () => {

    const store=createStore(
        combineReducers({
            users:usersReducers,
            notes:notesReducers
        }), 
    applyMiddleware(thunk))    
    return store
}


export default configureStore
