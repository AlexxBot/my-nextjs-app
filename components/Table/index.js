import { useSelector, useDispatch } from "react-redux"
import { PencilSVG, TrashSVG, PersonAddSVG, CloseSVG } from 'icons/index'
import { getProducts } from '../../store'

import { useEffect, useState, useForm } from "react"



import { Formik, Field, Form } from 'formik';

export function Table({ token }) {
	const state = useSelector((state) => state.product);

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getProducts());//una vez ejecutado esto el estado se acutaliza con los valores de la lista
	}, [dispatch])

	return (
		<> 	



			{/* <header className="header">
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
			</header> */}

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
					{state.productList && state.productList.map(({ _id, name, category, price, imgURL }) => (
						<tr key={_id}>
							<td>{name}</td>
							<td>{category}</td>
							<td>{price}</td>
							<td>{imgURL}</td>
							<td>
								<button
									className="btn btn__compact btn__edit"
									onClick={() => {
										//dispatch(setSelectedEmployee(_id));
										//dispatch(setModalOpen(true));
									}}
								>
									<PencilSVG />
								</button>
								<button
									className="btn btn__compact btn__delete"
									onClick={() => {
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