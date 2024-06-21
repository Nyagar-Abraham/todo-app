import { useSelector } from 'react-redux';
import Item from './Item';

function TodoList() {
	const { todos, filter, completed } = useSelector((state) => state);

	let displayTodos;
	if (filter === 'all') displayTodos = todos;

	if (filter === 'active')
		displayTodos = todos?.filter((todo) => !completed.includes(todo?.id));

	if (filter === 'completed')
		displayTodos = todos?.filter((todo) => completed.includes(todo?.id));

	return (
		<ul className="bg-white dark:bg-slate-900 dark:text-slate-100 rounded-t-sm px-3 py-4 h-80  flex flex-col gap-4  divide-y-[1px] sm:mt-8 dark:divide-slate-500 overflow-hidden overflow-y-scroll ">
			{displayTodos.map((todo) => (
				<Item key={todo?.id} todo={todo} />
			))}
		</ul>
	);
}

export default TodoList;
