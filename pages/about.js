import { useSelector } from "react-redux"
import { Navigator } from '../components/navigator'

export default function About() {

    const state = useSelector((state) => state.product)

    const stateAuth = useSelector((state) => state.auth)


    return (
        <>
            <Navigator />
            <h1>Este es el token que se guarda en el store: {stateAuth.token} y este es el numero de elementos de la lista: {state.productList.length} </h1>
        </>

    )
}