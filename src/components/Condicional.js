// Aula 12 - Trabalhando com Condicionais IF e ELSE para Renderizar ou Ocultar algo

import { useState } from 'react'

function Condicional() {
   const [email, setEmail] = useState()
   const [userEmail, setUserEmail] = useState()

   function enviarEmail(e) {
      e.preventDefault()
      setUserEmail(email)
      // Recebe o email do input e atribui ao userEmail
      console.log(userEmail)
   }

   function limparEmail() {
      setUserEmail('')
   }

   return (
      <div>
         <h3>Cadastre o Seu E-mail</h3>
         <form>
            <input
               type="email"
               placeholder="Digite o seu E-mail ..."
               onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" onClick={enviarEmail}>
               Enviar-Email
            </button>
            {/* {userEmail}  // Renderiza o email na tela */}
            {userEmail && (
               <div>
                  <p>O E-mail do usuário é : {userEmail}</p>
                  <button onClick={limparEmail}>Limpar E-mail</button>
               </div>
            )}
         </form>
      </div>
   )
}

export default Condicional
