
import TodoItem from './TodoItem';

function OutputComponent ({todos}) {
	let todoItems = todos.map((todo, index) => {
		return (
			<TodoItem key={index} todo={todo} />
		);
	});

	return (
		<div className="OutputComponent p-12 min-h-screen">
			<h2 className="text-2xl">
				{todos.length > 0 ? "List of todos" : "No todos added"}
			</h2>
			<div className="">
				{todoItems}
			</div>
		</div>
	);
}

export default OutputComponent;
