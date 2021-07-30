import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import * as t from '../types'
import axios from 'axios'
import productService from "./../../services/productService";

import {URL} from '../../global'

//se pone el * porque es una stream por lo tanto retorna cambios segun se llamado para notificar a los componentos que lo llaman

function* getProducts() {
	try {		
		console.log('se esta listando los prodcutos en saga')
		const data = yield call(productService.getProducts)
		//const response = yield call(productService.getProducts())
		console.log('estos son los datos del response en saga ', data)
		yield put({
			type: t.PRODUCT_GET_SUCCEEDED,
			payload: data,
		});
	} catch (error) {
		yield put({
			type: t.PRODUCT_GET_FAILED,
			payload: error.message,
		});
	}
}

function* watchGetProducts() {
	yield takeLatest(t.PRODUCT_GET_REQUESTED, getProducts);
}

function* addProduct({payload}) {
	try{
		//console.log('entro al add product de saga con este payload ', payload)
		const response = yield call(productService.saveProduct, payload.token, payload.product)
		console.log('esta es la respuesta de guardar un producto ', response)
		yield put({
			type: t.PRODUCT_ADD_SUCCEEDED,
			payload: response
		});
	}
	catch(error){
		yield put({
			type: t.PRODUCT_ADD_FAILED,
			payload: {}
		})
	}
}

function* watchSaveProduct() {
	yield takeLatest(t.PRODUCT_ADD_REQUESTED, addProduct);
}

export default function* rootSaga(){
    yield all([
        watchGetProducts(),
		watchSaveProduct()
    ]);
}