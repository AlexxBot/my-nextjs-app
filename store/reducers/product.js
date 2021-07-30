import { HYDRATE } from 'next-redux-wrapper'//hydrate is use para repintar solo se que nos importa
import * as t from "../types"

const initialState = {
    productList : [],
    selectedProduct : null,
    isModalOpen: false,
    token: ''
}

const productReducer = (state = initialState, action) => {
    console.log('esta es la action que se esta ejectando ', action)
    switch (action.type) {
        case HYDRATE:
            return {...state, ...action.payload}
        case t.SET_TOKEN:
            return {
                ...state, 
                token: action.payload
            }          
        case t.MODAL_OPEN:
            return{
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
            if(exito === true){
                return {
                    ...state,
                    productList: [ action.payload.newProduct , ...state.productList ]
                }
            }
            return state        
        default:
            return state;
    }
}

export default productReducer