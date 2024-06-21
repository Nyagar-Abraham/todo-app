import { useDispatch, useSelector } from 'react-redux';
import Icons from './Icons';
import { addItem } from './TodoSclce';
import { useRef } from 'react';

function Input() {
	const { todos } = useSelector((state) => state);
	const dispatch = useDispatch();
	const ref = useRef();

	function handleSubmit(e) {
		e.preventDefault();
		const formData = new FormData(e.target);

		dispatch(addItem(Object.fromEntries(formData)));
		ref.current.value = '';
	}

	return (
		<form onSubmit={handleSubmit} className="mt-6  mb-3 relative ">
			<button className="dark:bg-slate-700 h-6 w-6 rounded-full  border-2  border-indigo-100 dark:border-slate-500 flex items-center justify-center hover:bg-indigo-400 dark:text-slate-50 dark:hover:bg-indigo-800 absolute top-1/2 left-2 -translate-y-1/2">
				<Icons name="check" />
			</button>
			<input
				ref={ref}
				className={`dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-50  text-inherit w-full h-10 rounded-sm placeholder:text-gray-300 px-4 pl-12 text-gray-700 focus:outline-none focus:ring focus:right-1 focus:ring-gray-200 dark:focus:ring-gray-400 font-semibold hover:bg-gray-50 cursor-pointer ${
					!todos.length && 'placeholder:text-gray-500'
				}`}
				name="todo"
				type="text"
				placeholder="Add todo..."
			/>
		</form>
	);
}

export default Input;
