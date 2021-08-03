import Link from 'next/link'
import Router from 'next/router'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { actions } from '../store'

export function Navigator() {


    const stateAuth = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(actions.auth.logout())
    }

    useEffect(() =>{
        if(!stateAuth.isLogged){
            Router.push('/')
        }
    }, [stateAuth.isLogged])
    return (
        <div className='bar'>
            <div className='bar__leading'>
                <p className='title'>Brain Systems</p>
            </div>
            <div className='bar__body'>
                <ul className='navbar'>
                    {/* <li className='navbar__element'>
                        <Link href='/'>
                            <a className='navbar__texto'>Login</a>
                        </Link>
                    </li> */}
                    <li className='navbar__element'>
                        <Link href='/about'>
                            <a className='navbar__texto'>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/product'>
                            <a className='navbar__texto'>Products</a>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='bar__trailing'>
                <div className='bar__trailing__element'>
                    <p className='title'>{stateAuth.userName}</p>
                </div>
                <div className='bar__trailing__element'>
                    <button className='btn' onClick={logout}>
                        Logout
                    </button>
                </div>


            </div>

        </div>

    )
}