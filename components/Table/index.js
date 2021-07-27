import { useSelector, useDispatch } from "react-redux"
import { PencilSVG, TrashSVG, PersonAddSVG, CloseSVG } from 'icons/index'
import { getPersonas } from '../../store'

import { useEffect, useState, useForm } from "react"
import ReactDOM from "react-dom";
import ProductService from "services/productService";
import productService from "services/productService";
import IProduct from '../../types/IProduct'

//import Selector from './selector'

import { Formik, Field, Form } from 'formik';

const initialProduct = {
	_id: '',
	name: '',
	category: '',
	price: 0,
	image_url: ''

}
const categories = [
	{ value: '', label: '' },
	{ value: 'laptop', label: 'laptop' },
	{ value: 'impresora', label: 'impresora' }
]

export function Table({ token }) {
	const state = useSelector((state) => state.persona);

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getPersonas());

	}, [dispatch])



	const [productList, SetProductList] = useState([])
	const [product, setProduct] = useState(initialProduct)
	const [showModal, setShowModal] = useState(false)
	const [isNew, setIsNew] = useState(true)

	/* const fetchPersonas = async () => {
		return productService.getPersonas()

	} */

	useEffect(() => {
		productService.getPersonas().then((lista) => SetProductList(lista))

		//console.log('este es el token ',token)

	}, [])

	const eliminar = async (id) => {
		console.log('este es el id que se quiere eliminar ', id)
		const eliminado = await productService.deletePersona(token, id)
		if (eliminado) {
			const updatedList = productList.filter((val) => val._id !== id)
			SetProductList(updatedList)
		}
	}

	const recuperar = async (id) => {
		const produtoRecuperado = await productService.getPersona(id)

		//console.log('este es el producto recuperado ', produtoRecuperado)
		setProduct(produtoRecuperado)

	}

	const guardar = async (product) => {
		if (isNew) {
			console.log('este producto se esta guardando', product)
			const { exito, newProduct } = await productService.savePersona(token, product)
			if (exito) {
				SetProductList([...productList, newProduct])
			}
		}
		else{
			const {exito, updatedProduct }= await productService.updateProduct(token, product)
			if(exito) {
				const newList = productList.filter((val) => val._id !== product._id)
				SetProductList([updatedProduct, ...newList])
			}
		}

	}

	const closeModal = () => {
		//reset();
		setShowModal(false)
		//dispatch(setModalOpen(false));
		//dispatch(setSelectedEmployee(undefined));
	};



	return (
		<> 	{showModal ?
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
										errors.name = 'Requerido'
									}

									return errors
								}
							}

							onSubmit={(values, { setSubmitting }) => {
								/* setTimeout(() => {
									alert(JSON.stringify(values, null, 2));
									setSubmitting(false);
								}, 20); */
								guardar(values)
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
								/* and other goodies */
							}) => (


								<Form className="form modal__form">
									<label className='label'>Name</label>
									<Field name='name' className="input" />
									<label className='label'>Category</label>
									<Field name='category' className="input" />
									{/* <Field name="category" className='input'>
										{({
											field, // { name, value, onChange, onBlur }
											form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
											meta,
										}) => (
											<Selector categorias={categories} titulo="categorias" {...field} />
										)}
									</Field> */}
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
		}

			<header className="header">
				<h1 className="header__h1">
					<span>Products</span>
				</h1>
				<button
					className="btn btn__primary btn__icon"
					onClick={() => {

						setShowModal(true)
						setIsNew(true)
						setProduct(initialProduct)
						//dispatch(setModalOpen(true));
					}}
				>
					<PersonAddSVG /> <span>Nuevo</span>
				</button>
			</header>

			<table className="table">
				<thead className="table__head">
					<tr>
						<th>Name</th>
						<th>Category</th>
						<th>Price</th>
						<th>Image URL</th>

					</tr>
				</thead>

				<tbody className="table__body">
					{productList && productList.map(({ _id, name, category, price, imgURL }) => (
						<tr key={_id}>
							<td>{name}</td>
							<td>{category}</td>
							<td>{price}</td>
							<td>{imgURL}</td>
							<td>
								<button
									className="btn btn__compact btn__edit"
									onClick={() => {
										
										setIsNew(false)
										setShowModal(true)
										recuperar(_id)
										//dispatch(setSelectedEmployee(_id));
										//dispatch(setModalOpen(true));
									}}
								>
									<PencilSVG />
								</button>
								<button
									className="btn btn__compact btn__delete"
									onClick={() => {
										eliminar(_id)
										//dispatch(deleteEmployee(_id));
									}}
								>
									<TrashSVG />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}