// AULA 15 - ROUTER App.js
// App-Aula14.js versão anterior
// Criar os componentes Home, Empresa e Contato
// ERRO: export 'Switch' (imported as 'Switch') was not found in 'react-router-dom' version 6.
// Usar o 'Routes' no Lugar de 'Switch'  link: https://reactrouter.com/en/6.15.0/upgrading/v5#upgrade-all-switch-elements-to-routes

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Empresa from './components/pages/Empresa'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
   return (
      <div className="App">
         <Router>
            <Navbar />
            <Routes>
               <Route path="/" element={<Home />} />

               <Route path="/Empresa" element={<Empresa />} />

               <Route path="/Contato" element={<Contato />} />
            </Routes>
         </Router>
         <Footer />
      </div>
   )
}

export default App

/* EXEMPLO ATÉ A VERSÃO 5 DO REACT-ROUTER-DOM COM "SWITCH"
 <Switch>
   <Route exact path="/">
      <Home />
   </Route>
   <Route path="/Contato">
               <Contato />
   </Route>
</Switch>

*/
