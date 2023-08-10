// Aula 12 - Trabalhando com Condicionais IF e ELSE para Renderizar ou Ocultar algo

// import { useState } from 'react'

function Condicional() {
   function enviarEmail(e) {
      e.preventDefault()
      console.log('Testando')
   }

   return (
      <div>
         <h2>Cadastre o Seu E-mail</h2>
         <form>
            <input type="email" placeholder="Digite o seu E-mail ..." />
            <button type="submit" onClick={enviarEmail}>
               Enviar-Email
            </button>
         </form>
      </div>
   )
}

export default Condicional
