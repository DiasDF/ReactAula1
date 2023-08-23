// AULA 13 App.js
// App-Aula12.js versão anterior

// Criar o component OutraLista.js

import './App.css'
import OutraLista from './components/OutraLista'

function App() {
   const meusItens = ['React', 'Vue', 'Angular']

   return (
      <div className="App">
         <div className="MargimBodyContainer">
            <h2>Renderização de Listas</h2>
            <OutraLista itens={meusItens} />
            <OutraLista itens={[]} />
         </div>
      </div>
   )
}

export default App
