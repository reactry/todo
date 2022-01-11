import './App.css';

import React from 'react';

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

function App () {
	let [todos, setTodos] = React.useState([]);

	return (
		<div className="App">
			<HeaderComponent />
			<InputComponent todos={todos} setTodos={setTodos} />
			<OutputComponent todos={todos} />
			<FooterComponent />
		</div>
	);
}

export default App;
