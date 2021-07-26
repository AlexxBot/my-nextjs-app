import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from './style'



import Layout from '../components/Layout'
import Button from '../components/Button'
import LogoBS from '../components/Icons/LogoBS'
import { Table } from '../components/Table'
export default function Home() {
  return (
    <>
      <Layout>
        {/* <section>
          <img src='/bslogo.png' />

          <h2>BS aplication</h2>
          <h3> This is a demo to BS crud</h3>
          <input placeholder='username' type='text' onChange = {() => null}/>
          <input placeholder='password' type='password' onChange = {() => null}/>
          <div>
            <Button onClick={() => null}>
              Login
            </Button>
          </div>
        </section> */}
        
      <Table/>

      </Layout>
      {/* <style jsx>{styles}

      </style> */}
    </>
  )
}
