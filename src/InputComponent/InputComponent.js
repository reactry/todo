import React from 'react';



function InputComponent ({todos, setTodos}) {
	let [todoText, setTodoText] = React.useState("");

	function handleInputChange (e) {
		setTodoText(e.target.value);
	}

	function handleSubmit (e) {
		e.preventDefault();
		let text = todoText.trim();
		if (text) {
			setTodos([text, ...todos]);
			setTodoText("");
		}
		console.log("Added todo: " + todoText);
	}

	return (
		<div className="InputComponent p-12 bg-slate-300">
			<h2 className="text-2xl">Add a todo</h2>
			<form className="py-4" onSubmit={handleSubmit}>
				<input type="text" name="todo" value={todoText} onChange={handleInputChange} className="p-2" />
				<button type="submit" className="bg-blue-600 text-white px-4 py-2">Add</button>
			</form>
		</div>
	);
}

export default InputComponent;
