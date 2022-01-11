import './App.css';

import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';

import InputComponent from './InputComponent';
import OutputComponent from './OutputComponent';

function App () {
	return (
		<div className="App">
			<HeaderComponent />
			<InputComponent />
			<OutputComponent />
			<FooterComponent />
		</div>
	);
}

export default App;
