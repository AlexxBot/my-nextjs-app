import { useDispatch } from "react-redux";
import { PersonAddSVG } from 'icons/index'
//import { setModalOpen } from "../../store";
import { actions }  from "../../store";

export function Header() {
	const dispatch = useDispatch();

	return (
		<header className="header">
			<h1 className="header__h1">
				Manage <span>Products</span>
			</h1>
			<button
				className="btn btn__primary btn__icon"
				onClick={() => {
					dispatch(actions.product.setModalOpen(true));
				}}
			>
				<PersonAddSVG /> <span>Add new</span>
			</button>
		</header>
	);
}
