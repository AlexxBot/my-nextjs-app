import * as t from '../types'

export const getProducts = () => {
    console.log('entro a la action de requerir products')
    return {
        type: t.PRODUCT_GET_REQUESTED,
    }
}
export const setSelectedProduct = (id) => {
    console.log('se ejecuto la action set selected Product')
    return {
        type: t.PRODUCT_SELECTED,
        payload : id
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

export const deleteProduct = (token, id) => {
    console.log('se esta ejecutando la accionde eliminar')

    return {
        type: t.PRODUCT_DELETE_REQUESTED,
        payload : { token, id }
    }
}

export const updateProduct = (token, product) => {
    console.log(' se esta ejecutando la accion de actualizar')

    return {
        type: t.PRODUCT_UPDATE_REQUESTED,
        payload: { token, product }
    }
}
