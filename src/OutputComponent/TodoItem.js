


function TodoItem ({todo}) {
	return (
		<div className="bg-slate-600 text-white rounded w-56 py-4 px-5 my-6 mx-2 inline-block" >
			<h4 className="text-xl">{todo}</h4>
		</div>
	);
}

export default TodoItem;
