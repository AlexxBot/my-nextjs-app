import { combineReducers } from "redux"
import productReducer from "./product"
import authReducer from './auth'

const rootReducer = combineReducers({
    product: productReducer,
    auth: authReducer
});

export default rootReducer;