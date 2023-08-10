// AULA 11 Apenas App.js
// App-Aula1até10.js versão anterior

import "./App.css"
import Evento from "./components/Evento"
import Form from "./components/Form"
import Frase from "./components/Frase"

function App() {
   return (
      <div className="App">
         <div className="MargimBodyContainer">
            <h1>Testando Eventos</h1>
            <Evento />
            <Form />
            <Frase />
         </div>
      </div>
   )
}

export default App
