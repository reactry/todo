import React from 'react';



function InputComponent ({todos, setTodos}) {
	let [todoText, setTodoText] = React.useState("");

	function handleOnInputChange (e) {
		setTodoText(e.target.value);
	}

	function addTodo (e) {
		e.preventDefault();
		setTodos([...todos, todoText]);
		console.log("Added todo: " + todoText);
	}

	return (
		<div className="InputComponent p-12 bg-slate-300">
			<h2 className="text-2xl">Add a todo</h2>
			<form className="py-4">
				<input type="text" name="todo" onChange={handleOnInputChange} className="p-2" />
				<button type="submit" onClick={addTodo} className="bg-blue-600 text-white px-4 py-2">Add</button>
			</form>
		</div>
	);
}

export default InputComponent;
