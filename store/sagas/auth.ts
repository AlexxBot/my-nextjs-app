import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import * as t from '../types/auth-types'

import { User } from '../../types/Auth'
import { Action } from '../../types'

import authService from '../../services/authService'

function* login({ type, payload}: Action<User>) {
    try {
        console.log(' se esta intenteando logear cone este usuario ', payload )
        const response = yield call(authService.signin, payload)

        console.log('esta es la respuesta despues del logeo', response)
        yield put({
            type: t.LOGIN_SUCCEEDED,
            payload: {...response, userName: payload.userName}
        })
    }
    catch(error) {
        yield put ({
            type: t.LOGIN_FAILED,
            payload: { userName: '', token: '', isLogged: false}
        })
    }
}

function * watchLogin() {
    yield takeLatest(t.LOGIN_REQUESTED, login)   
}

//export default function * root