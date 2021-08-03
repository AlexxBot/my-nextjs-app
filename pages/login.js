
import Button from '../components/Button'
import authService from 'services/authService'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

//import { setToken } from '../store'

import { actions } from '../store'

import Router from 'next/router'

import styles from './styles/style'

const userLoginInitial = {
    email: '',
    password: ''
}

export default function Login() {

    const stateAuth = useSelector((state) => state.auth)

    const dispatch = useDispatch()

    const [userLogin, setUserLogin] = useState(userLoginInitial)

    const fillLogin = (e) => {
        setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
    }

    const login = () => {
        dispatch(actions.auth.login(userLogin))
    }

    useEffect(() => {
        
        
    }, [])

    const logear = async () => {
        const { isLogged, token } = await authService.signin({ email: userLogin.email, password: userLogin.password })

        console.log('token ', token)
        dispatch(actions.product.setToken(token))
        //dispatch()
        //setUserLogin({ ...userLogin, isLogged: isLogged, token: token })
        if (isLogged) {
            Router.push('/product')
        }
    }

    return (
        <>
            <section>
                <img src='/bslogo.png' width='30px' height='30px' />
                <h2>BS aplication</h2>
                <h3> This is a demo to BS crud</h3>
                <input type='text' placeholder='email' name="email" value={userLogin.email} onChange={fillLogin} />
                <input type='password' placeholder='password' name='password' value={userLogin.password} onChange={fillLogin} />
                <div>
                    <Button onClick={logear}>
                        Login
                    </Button>
                </div>
            </section>
            <style jsx>{styles}
            </style>
        </>
    )
}