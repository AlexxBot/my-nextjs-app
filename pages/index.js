import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from './style'

import { useState } from 'react'



import Layout from '../components/Layout'
import Button from '../components/Button'
import LogoBS from '../components/Icons/LogoBS'
import { Table } from '../components/Table'
import authService from 'services/authService'


const userLoginInitial = {
  email: '',
  password: '',
  token: '',
  isLogged: false

}


export default function Home() {

  const [userLogin, setUserLogin] = useState(userLoginInitial)


  const fillLogin = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
  }

  const logear = async () => {
    const { isLogged, token } = await authService.signin({ email: userLogin.email, password: userLogin.password })

    console.log('token ',token)
    setUserLogin({ ...userLogin, isLogged: isLogged, token: token })

  }


  return (
    <>
      <Layout>
        {
          console.log(userLogin.isLooged)}
        {
          !userLogin.isLogged === true ?
            <section>
              <img src='/bslogo.png' width='30px' height='30px' />

              <h2>BS aplication</h2>
              <h3> This is a demo to BS crud</h3>
              <input type='text' placeholder='email' name="email" value={userLogin.email} type='text' onChange={fillLogin} />
              <input type='text' placeholder='password' name='password' value={userLogin.password} onChange={fillLogin} />
              <div>
                <Button onClick={logear}>
                  Login
                </Button>
              </div>
            </section>
            : <Table token={userLogin.token}/>}

      </Layout>

      {/* <style jsx>{styles}

      </style> */}
    </>
  )
}
