// AULA 09 Novo App.js
import "./App.css"
import Evento from "./components/Evento"
import Form from "./components/Form"
import Frase from "./components/Frase"

function App() {
   return (
      <div className="App">
         <div className="MargimBodyContainer">
            <h1>Testando Eventos</h1>
            <Evento numero="1" />
            <Evento numero="2" />
            <Evento numero="4" />
            <Form />
            <Frase />
         </div>
      </div>
   )
}

export default App

//
//
//
//
//
// ------ DEFAUT CODE APP.JS
/* USADOS NAS AULAS DE 1 ATÉ 9
import HelloWorld from "./components/HellWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";
*/
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
