import * as t from '../types/auth-types'
import { User } from '../../types/Auth'
import { Action } from '../../types'


export const login = (user: User): Action<User> => {
    return {
        type: t.LOGIN_REQUESTED,
        payload: user
    }
}

export const logout = () => {
    return {
        type: t.LOGOUT
    }
}