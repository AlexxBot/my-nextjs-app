import { Table } from '../components/Table'
import { Header } from '../components/Header'
import { Modal } from '../components/Modal'
import { Navigator } from '../components/navigator'

import formStyle from './styles/formStyle'

export default function Product() {
    return (
        <>

            <Navigator />
            <div>
                <Header />
                <Table />
                <Modal />
            </div>
            <style jsx>{formStyle}

            </style>
        </>
    )
}