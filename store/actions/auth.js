import * as t from '../types'

export const setToken = (token) => {
    return {
        type: t.SET_TOKEN,
        payload: token
    }
}