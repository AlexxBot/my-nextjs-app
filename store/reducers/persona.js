import { HYDRATE } from 'next-redux-wrapper'//hydrate is use para repintar solo se que nos importa
import * as t from "../types"

const initialState = {
    personaList : [],
    persona : {}
}

const personaReducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload}

        case t.PERSONAS_GET_REQUESTED:            
            return { 
                ...state, 
                personaList: action.payload
            }   
        default:
            return state;
    }
}

export default personaReducer