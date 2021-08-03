import { useSelector, useDispatch } from "react-redux"
import { PencilSVG, TrashSVG, PersonAddSVG, CloseSVG } from 'icons/index'
//import { deleteProduct, getProducts, setSelectedProduct, setModalOpen } from '../../store'

import { actions } from '../../store'

import { useEffect, useState, useForm } from "react"

export function Table() {
	const state = useSelector((state) => state.product);

	const stateAuth = useSelector((state) => state.auth)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(actions.product.getProducts());//una vez ejecutado esto el estado se acutaliza con los valores de la lista
	}, [dispatch])

	return (
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
									dispatch(actions.product.setSelectedProduct(_id));
									dispatch(actions.product.setModalOpen(true));
								}}
							>
								<PencilSVG />
							</button>
							<button
								className="btn btn__compact btn__delete"
								onClick={() => {
									dispatch(actions.product.deleteProduct(stateAuth.token, _id));
								}}
							>
								<TrashSVG />
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>

	);
}