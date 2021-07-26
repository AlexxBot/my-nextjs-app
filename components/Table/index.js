import { useSelector, useDispatch} from "react-redux"
//import { PencilSVG, TrashSVG } from 'icons/index'
import { getPersonas } from '../../store'

import { useEffect } from "react"

export function Table(){
    const state = useSelector((state) => state.persona);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPersonas());

    }, [dispatch])

	//console.log(state.personaList)

    return (
		<table className="table">
			<thead className="table__head">
				<tr>
					<th>Name</th>
					<th>Category</th>
					<th>Price</th>

				</tr>
			</thead>

			<tbody className="table__body">
				{state.personaList && state.personaList.map(({ _id, name, category, price}) => (
					<tr key={_id}>
						<td>{name}</td>
						<td>{category}</td>
						<td>{price}</td>
						<td>
							{/* <button
								className="btn btn__compact btn__edit"
								onClick={() => {
									dispatch(setSelectedEmployee(_id));
									dispatch(setModalOpen(true));
								}}
							>
								<PencilSVG />
							</button> */}
							{/* <button
								className="btn btn__compact btn__delete"
								onClick={() => {
									dispatch(deleteEmployee(_id));
								}}
							>
								<TrashSVG />
							</button> */}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}