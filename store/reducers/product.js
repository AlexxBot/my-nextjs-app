import { HYDRATE } from 'next-redux-wrapper'//hydrate is use para repintar solo se que nos importa
import * as t from "../types/types"

const initialState = {
    productList: [],
    selectedProduct: undefined,
    isModalOpen: false,
    token: ''
}

const productReducer = (state = initialState, action) => {
    console.log('esta es la action que se esta ejectando ', action)
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload }
        case t.SET_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        case t.MODAL_OPEN:
            return {
                ...state,
                isModalOpen: action.payload
            }
        case t.PRODUCT_GET_SUCCEEDED:
            return {
                ...state,
                productList: action.payload
            }
        case t.PRODUCT_ADD_SUCCEEDED:

            const exito = action.payload.exito
            //console.log('este es la accion cuandoa guarda', action.payload)
            if (exito === true) {
                return {
                    ...state,
                    productList: [action.payload.newProduct, ...state.productList]
                }
            }
            return state
        case t.PRODUCT_DELETE_SUCCEEDED:

            const eliminado = action.payload.eliminado
            //console.log('este es la accion cuandoa guarda', action.payload)
            if (eliminado === true) {

                const newList = state.productList.filter((product) => product._id !== action.payload.id)

                return {
                    ...state,
                    productList: newList
                }
            }
            return state
        case t.PRODUCT_SELECTED:


            //console.log(' esta es el id de la accion del select ', action.payload)
            const product = state.productList.find((product) => product._id === action.payload)

            //console.log('este es el producto que se quiere seleccionar en redux ', selectedProduct)

            return {
                ...state,
                selectedProduct: product
            }

        case t.PRODUCT_UPDATE_SUCCEEDED:

            const updated = action.payload.exito
            const updatedProduct = action.payload.updatedProduct
            console.log('este es la accion cuandoa actualiza', action.payload)
            if (updated === true) {

                const newList = state.productList.filter((product) => product._id !== action.payload.updatedProduct._id)


                return {
                    ...state,
                    productList: [updatedProduct, ...newList]
                }
            }
            return state
        default:
            return state;
    }
}

export default productReducer