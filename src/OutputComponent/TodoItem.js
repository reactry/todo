


function TodoItem ({todo}) {
	return (
		<div className="border-slate-300 border-l-slate-600 border-2 border-l-4 shadow-md rounded w-56 py-4 px-6 my-6 mx-2 inline-block" >
			<div className="">
				<div className="mb-4">
					<h4 className="text-base">{todo.text}</h4>
				</div>
				<div className="bg-blue-300 px-3 py-1 text-sm inline-block rounded-xl">
					<h6>{todo.date.toLocaleTimeString()}</h6>
				</div>
			</div>
		</div>
	);
}

export default TodoItem;
