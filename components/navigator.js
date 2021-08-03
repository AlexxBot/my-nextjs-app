import Link from 'next/link'

export function Navigator() {
    return (
        <ul className='navbar'>
            <li className='navbar__element'>
                <Link href='/'>
                    <a className='navbar__texto'>Login</a>
                </Link>
            </li>
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
    )
}