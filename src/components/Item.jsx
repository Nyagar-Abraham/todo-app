/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import Icons from './Icons';
import { deleteItem, done, undo } from './TodoSclce';

function Item({ todo }) {
	const { completed } = useSelector((state) => state);
	const dispatch = useDispatch();

	const isComplete = completed?.includes(todo?.id);

	function handleComplete() {
		if (!isComplete) dispatch(done(todo?.id));
		if (isComplete) dispatch(undo(todo?.id));
	}

	return (
		<li className="flex items-center gap-5 pt-4 ">
			<button
				onClick={() => handleComplete(todo.id)}
				className={` dark:bg-slate-700 h-6 w-6 rounded-full  border-2  border-indigo-100 dark:border-slate-500 flex items-center justify-center hover:bg-indigo-400 dark:hover:bg-indigo-800top-1/ ${
					isComplete ? 'bg-indigo-400 ' : ''
				}`}
			>
				<Icons name="check" />
			</button>
			<p className={`${isComplete ? 'text-gray-400 line-through' : ''}`}>
				{todo?.todo}
			</p>
			<button
				onClick={() => dispatch(deleteItem(todo?.id))}
				className="ml-auto "
			>
				<Icons name="cross" />
			</button>
		</li>
	);
}

export default Item;
