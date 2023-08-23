// AULA 14 App.js
// App-Aula13.js versão anterior

// Criar SeuNome.js
import { useState } from 'react'
import './App.css'
import SeuNome from './components/SeuNome'
import Saudacao from './components/Saudacao'

function App() {
   const [nome, setNome] = useState()
   // Recebe a propiedade setNome via PROPS
   // Na forma anterior essa const ficaria no componente SeuNome.js

   return (
      <div className="App">
         <div className="MargimBodyContainer">
            <h2>State Lift</h2>
            <SeuNome setNome={setNome} />
            <Saudacao nome={nome} />
         </div>
      </div>
   )
}

export default App
