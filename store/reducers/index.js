import { combineReducers } from "redux"
import personaReducer from "./persona"

const rootReducer = combineReducers({
    persona: personaReducer
});

export default rootReducer;