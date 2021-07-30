import * as t from '../types'

export const getProducts = () => {
    console.log('entro a la action de requerir products')
    return {
        type: t.PRODUCT_GET_REQUESTED,
    }
}

export const setModalOpen = (isModalOpen) => {
    console.log('se ejecuto la action show modal')
    return{
        type: t.MODAL_OPEN,
        payload: isModalOpen
    }
}

export const addProduct = (token, product) => {
    console.log('se esta ejecutando la accion add product')
    return {
        type: t.PRODUCT_ADD_REQUESTED,
        payload: { token, product}
    }
}
