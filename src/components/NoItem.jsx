function NoItem() {
	return (
		<div className="bg-white dark:bg-slate-900 text-center mt-10 text-gray-800 dark:text-slate-100 rounded-sm pt-10 pb-6">
			<h2 className="text-2xl font-semibold">😊Please add a todo</h2>
			<p className="mt-4 ">You currently do not have an item in your list</p>
		</div>
	);
}

export default NoItem;
