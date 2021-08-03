import { useDispatch, useSelector} from "react-redux"
import { useState, useEffect } from 'react'
import ReactDOM from "react-dom";

import { CheckSVG, CloseSVG } from "../../icons";

import { Formik, Form, Field } from "formik";

//import { IProduct } from "types/IProduct"

/* import {
    addProduct,
    setModalOpen,
    setSelectedProduct,
    updateProduct,
} from "../../store"; */

import { actions }  from '../../store'

const productInitial = {
    _id: '',
    name: '',
    category: '',
    price: 0,
    imgURL: ''

}

export function Modal() {

    const state = useSelector((state) => state.product)

    //const [product, setProduct] = useState(productInitial)

    const dispatch = useDispatch()

    const closeModal = () => {
        //reset();
        dispatch(actions.product.setModalOpen(false));
        dispatch(actions.product.setSelectedProduct(undefined));
    };

    const submit = (values) => {
        /* if (values) {
            closeModal()
        } */
        if (state.selectedProduct) {
            console.log('se quiere actualizar el actualizar')
            //dispatch(updateProduct(state.selectedProduct))
            dispatch(actions.product.updateProduct(state.token, values))
        }
        else {
            console.log('se va a ejecutar el add en la vista')
            dispatch(actions.product.addProduct(state.token, values));
        }
        if (values) {
            closeModal()
        }
    }

    /* useEffect(() => {
        console.log('se entro a actualizar produto seleccionado en la vista con este producto ', state.selectedProduct)
        if (state.selectedProduct) {
            setProduct(state.selectedProduct)
        }
    }, [state.selectedProduct]) */

    return (
        state.isModalOpen ?
            ReactDOM.createPortal(
                <div className="modal">
                    <div className="modal__content">
                        <header className="header modal__header">
                            <h1 className="header__h2">

                                Edit <span>Product</span>
                            </h1>

                            <button
                                className="btn btn__compact btn__close"
                                onClick={closeModal}
                            >
                                <CloseSVG />
                            </button>
                        </header>

                        <Formik
                            initialValues={state.selectedProduct || productInitial}
                            validate={
                                values => {
                                    const errors = {}
                                    if (!values.name) {
                                        errors.name = 'El nombre es requerido'
                                    }
                                    return errors
                                }
                            }
                            onSubmit={(values, { setSubmitting }) => {

                                //dispatch(addProduct(state.token, values))
                                submit(values)

                            }
                            }
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,

                            }) => (


                                <Form className="form modal__form">
                                    <label className='label'>Name</label>
                                    <Field name='name' className="input" />
                                    <label className='label'>Category</label>
                                    <Field name='category' className="input" />

                                    <label className='label'>Price</label>
                                    <Field name='price' className="input" />
                                    <label className='label'>Image URL</label>
                                    <Field name='imgURL' className="input" />
                                    <div className="form__action">
                                        <button type="submit" className="btn btn__primary btn__icon">
                                            Submit
                                        </button>

                                    </div>

                                </Form>
                            )}

                        </Formik>
                    </div>
                </div>,
                document.body
            ) : null
    )

}