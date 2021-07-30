import axios from 'axios';
import { IProduct } from 'types/IProduct';
import { URL} from '../global'

class ProductService{

    URL_PRODUCT : string;

    constructor(){
        this.URL_PRODUCT = `${URL}/products`
    }

    getProducts = async () : Promise<IProduct[]>  =>{
        try {

            console.log(this.URL_PRODUCT)
            const response = await axios.get(this.URL_PRODUCT)
            console.log(response)
            if(response.status === 200){
                return response.data
            }
            else{
                return []
            }
        }
        catch(e){
            console.log(e)
            return []
        }       
    }
    
    deleteProduct = async (token: string, id: string) : Promise<boolean> => {
        const config = {
            headers: {
              'x-access-token': token
            }
        }
        try{
            console.log('este es el link para eliminar ', `${this.URL_PRODUCT}/${id}`)
            const response = await axios.delete(`${this.URL_PRODUCT}/${id}`, config )
            if(response.status == 204){
                return true
            }
            else{
                return false
            }
        }
        catch(e){
            console.log(e)
            return false
        }
    } 

    getProduct = async (id: string): Promise<IProduct> => {
        try{
            const response = await axios.get(`${this.URL_PRODUCT}/${id}`)
            if(response.status === 200){
                return response.data
            }          
        }
        catch(e){
            console.log(e)
            return null
        }
    }

    saveProduct = async (token: string, product: IProduct): Promise<{exito: boolean ,newProduct: IProduct}> => {
        try{
            const config = {
                headers: {
                  'x-access-token': token
                }
            }
            console.log('este el el cuerpo en el servicio ', product)
            const response = await axios.post(this.URL_PRODUCT, product, config)
            console.log('esta es la respuesta ', response)
            if(response.status === 201){
                return {exito: true, newProduct: response.data}
            }   
            else{
                return { exito: false, newProduct: null}
            }       
        }
        catch(e){
            console.log(e)
            return { exito: false, newProduct: null}
        }
    }

    updateProduct = async (token: string, product: IProduct): Promise<{exito: boolean ,updatedProduct: IProduct}> => {
        try{
            const config = {
                headers: {
                  'x-access-token': token
                }
            }
            //console.log('este el el cuerpo en el servicio update ', product)
            const response = await axios.put(`${this.URL_PRODUCT}/${product._id}`, product, config)
            //console.log('esta es la respuesta de update', response)
            if(response.status === 200){
                return {exito: true, updatedProduct: response.data}
            }   
            else{
                return { exito: false, updatedProduct: null}
            }       
        }
        catch(e){
            console.log(e)
            return { exito: false, updatedProduct: null}
        }
    }
}

const productService = new ProductService()

export default productService