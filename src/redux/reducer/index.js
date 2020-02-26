import { combineReducers } from 'redux'
import userReducer from './userReducer'
import sortReducer from './sortReducer'
import cartReducer from './CartReducer'


export const root = combineReducers({
    user : userReducer ,
    sort : sortReducer,
    cart : cartReducer
})

//export default root;