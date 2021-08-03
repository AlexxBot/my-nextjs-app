import axios from 'axios'
import { User } from 'types/Auth'
import { URL } from '../global'

class AuthService {

    URL_AUTH: string

    constructor() {
        this.URL_AUTH = `${URL}/auth`
    }

    signin = async (userLogin: User): Promise<{isLogged: boolean, token: string}> => {
        try {
            const response = await axios.post(`${this.URL_AUTH}/signin`, {email: userLogin.userName, ...userLogin})
            if (response.status === 200) {
                return { isLogged: true, token: response.data.token};
            }
            else {
                return { isLogged: false, token : ''}
            }
        }
        catch(e){
            console.log(e)
            return { isLogged: false, token : ''}
        }
        
    }
}

const authService = new AuthService()

export default authService