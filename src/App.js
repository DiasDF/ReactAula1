/** @format */

import HelloWorld from "./components/HellWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";

function App() {
	return (
		<div className="App">
			<HelloWorld />
			<SayMyName nome="Matheus" />
			<SayMyName nome="João" />
			<SayMyName nome="Francisco" />
			<Pessoa
				nome="Milton"
				idade="28"
				profissao="Programador"
				foto="https://via.placeholder.com/150"
			/>
			<List />
		</div>
	);
}

export default App;

//
//
//
//
//
// ------ DEFAUT CODE APP.JS

// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
