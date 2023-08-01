/** @format */
// AULA 09 em diante Novo App.js

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
/*
 ------ AULAS 1 ATÉ 9 
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
*/

// ------ DEFAUT CODE APP.JS

/* USADOS NAS AULAS DE 1 ATÉ 9
import HelloWorld from "./components/HellWorld";
import SayMyName from "./components/SayMyName";
import Pessoa from "./components/Pessoa";
import List from "./components/List";

import logo from './logo.svg';
*/
