import * as t from '../types/auth-types' 

const authInitialState: State = {
    userName: '',
    token:''
}

type State = {
    userName: String,
    token: String
}

type Action<T> = {
    type: String,
    payload: T

}


export const authReducer = (state = authInitialState, action : Action<any>) : State => {
    switch (action.type) {
        case t.LOGIN_SUCCEEDED:
            return {
                ...state,
                userName: action.payload.userName,
                token: action.payload.token
            }    
        default:
            return state
    }
}