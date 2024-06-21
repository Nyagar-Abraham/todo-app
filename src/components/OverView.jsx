import { useDispatch, useSelector } from 'react-redux';
import { addFilter, clear } from './TodoSclce';

/* eslint-disable react/prop-types */
function OverView() {
	const { todos } = useSelector((state) => state);

	const dispatch = useDispatch();

	return (
		<div className="bg-white px-6 py-1 flex items-center justify-between text-sm font-semibold text-gray-600 rounded-b-sm border-t border-gray-200 dark:border-gray-700 dark:bg-slate-900 dark:text-slate-200 ">
			<p className=" flex items-center">
				<span className="text-base mr-1">{todos.length}</span>items left
			</p>
			<div className="flex gap-2">
				<Button onClick={() => dispatch(addFilter('all'))}>All</Button>
				<Button onClick={() => dispatch(addFilter('active'))}>Active</Button>
				<Button onClick={() => dispatch(addFilter('completed'))}>
					Completed
				</Button>
			</div>
			<button
				onClick={() => dispatch(clear())}
				className="text-red-400  hover:text-red-500"
			>
				clear completely
			</button>
		</div>
	);
}

function Button({ children, onClick }) {
	return (
		<button onClick={onClick} className="hover:text-indigo-700">
			{children}
		</button>
	);
}

export default OverView;
