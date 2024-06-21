import { useSelector } from 'react-redux';
import Head from './Head';
import Input from './Input';
import OverView from './OverView';
import TodoList from './TodoList';
import NoItem from './NoItem';
function Main() {
	const { todos } = useSelector((state) => state);

	return (
		<main className="relative ">
			<div className=" mx-auto w-11/12 sm:w-9/12 md:w-7/12  rounded-md absolute -top-2/3 left-1/2 -translate-x-1/2 text-gray-800  shadow-sm">
				<Head />
				<Input />
				{todos.length > 0 ? (
					<>
						<TodoList />
						<OverView />
					</>
				) : (
					<NoItem />
				)}
			</div>
		</main>
	);
}

export default Main;
