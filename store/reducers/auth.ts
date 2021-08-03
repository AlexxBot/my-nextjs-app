import * as t from '../types/auth-types' 
import { Action } from '../../types'

const authInitialState: State = {
    userName: '',
    token:'',
    isLogged: false
}

type State = {
    userName: string,
    token: string,
    isLogged: boolean
}


const authReducer = (state = authInitialState, action : Action<any>) : State => {
    console.log('este es la action que se esta ejecutando', action)
    switch (action.type) {
        case t.LOGIN_SUCCEEDED:
            return {
                ...state,
                ...action.payload
            }    
        case t.LOGOUT:
            return {
                userName: '',
                token: '',
                isLogged: false
            }
        default:
            return state
    }
}

export default authReducer