import { all, put, takeLatest } from "@redux-saga/core/effects";
import * as t from '../types'
import axios from 'axios'

import {URL} from '../../global'

//se pone el * porque es una stream por lo tanto retorna cambios segun se llamado para notificar a los componentos que lo llaman

function* getPersonas() {
	try {
		//console.log(`${URL}/products`)
		const response = yield axios.get(`${URL}/products`)
        //console.log('esta es la respuesta ', response.data)
        //aqui faltari validar si la respuesta es 200
		yield put({
			type: t.PERSONAS_GET_SUCCEEDED,
			payload: response.data,
		});
	} catch (error) {
		yield put({
			type: t.PERSONAS_GET_FAILED,
			payload: error.message,
		});
	}
}

function* watchGetPersonas() {
	yield takeLatest(t.PERSONAS_GET_REQUESTED, getPersonas);
}

export default function* rootSaga(){
    yield all([
        watchGetPersonas()
    ]);
}