


function OutputComponent ({todos}) {
	let todoItems = todos.map((todo, index) => {
		return (
			<div className="bg-slate-600 text-white py-4 px-6 m-4" key={index}>
				<h4 className="text-xl">{todo}</h4>
			</div>
		);
	});

	return (
		<div className="OutputComponent p-12 min-h-screen">
			<h2 className="text-2xl">List of todos</h2>
			<div className="">
				{todoItems}
			</div>
		</div>
	);
}

export default OutputComponent;
