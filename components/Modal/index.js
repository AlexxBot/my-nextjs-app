import { useDispatch, useSelector } from "react-redux"
import ReactDOM from "react-dom";

import { CheckSVG, CloseSVG } from "../../icons";

import { Formik, Form, Field } from "formik";
import {
	addProduct,
	setModalOpen,
	setSelectedEmployee,
	updateEmployee,
} from "../../store";


const product = {
    _id:'',
    name: '',
    category: '',
    price: 0,
    imgURL: ''

}

export function Modal(){

    const state = useSelector((state) => state.product)

    const dispatch = useDispatch()

    const closeModal = () => {
		//reset();
		dispatch(setModalOpen(false));
		//dispatch(setSelectedEmployee(undefined));
	};

    //const closeModal = ()

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
                            initialValues={product}
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

                                //guardar(values)
                                dispatch(addProduct(state.token, values))

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