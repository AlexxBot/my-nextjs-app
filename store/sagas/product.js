import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import * as t from '../types'
import axios from 'axios'
import productService from "./../../services/productService";

import { URL } from '../../global'

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

function* addProduct({ payload }) {
	try {
		//console.log('entro al add product de saga con este payload ', payload)
		const response = yield call(productService.saveProduct, payload.token, payload.product)
		console.log('esta es la respuesta de guardar un producto ', response)
		yield put({
			type: t.PRODUCT_ADD_SUCCEEDED,
			payload: response
		});
	}
	catch (error) {
		yield put({
			type: t.PRODUCT_ADD_FAILED,
			payload: {}
		})
	}
}

function* watchSaveProduct() {
	yield takeLatest(t.PRODUCT_ADD_REQUESTED, addProduct);
}

function* deleteProduct({ payload }) {
	try {
		//console.log('entro al add product de saga con este payload ', payload)
		const eliminado = yield call(productService.deleteProduct, payload.token, payload.id)
		//console.log('esta es la respuesta de guardar un producto ', response)
		yield put({
			type: t.PRODUCT_DELETE_SUCCEEDED,
			payload: { eliminado, id: payload.id }
		});
	}
	catch (error) {
		yield put({
			type: t.PRODUCT_DELETE_FAILED,
			payload: { eliminado: false, id: null}, 
		})
	}
}

function* watchDeleteProduct() {
	yield takeLatest(t.PRODUCT_DELETE_REQUESTED, deleteProduct);
}

function* updateProduct({ payload }) {
	try {
		//console.log('entro al add product de saga con este payload ', payload)
		const response = yield call(productService.updateProduct, payload.token, payload.product)
		//console.log('esta es la respuesta de guardar un producto ', response)
		yield put({
			type: t.PRODUCT_UPDATE_SUCCEEDED,
			payload: response
		});
	}
	catch (error) {
		yield put({
			type: t.PRODUCT_UPDATE_FAILED,
			payload: { exito: false, updatedProduct: {} }
		})
	}
}

function* watchUpdateProduct() {
	yield takeLatest(t.PRODUCT_UPDATE_REQUESTED, updateProduct);
}

export default function* rootSaga() {
	yield all([
		watchGetProducts(),
		watchSaveProduct(),
		watchDeleteProduct(),
		watchUpdateProduct()
	]);
}