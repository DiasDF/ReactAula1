/* 
Aula de 11 EM DIANTE ...
*/

import Button from "./eventos/Button"

function Evento() {
   // 1º Método
   function meuEvento() {
      console.log(`Ativando o (1) Primeiro Evento - Filho!`)
   }
   // 2º Método
   function segundoEvento() {
      console.log(`Ativando o (2) Segundo Evento - filho!`)
   }

   return (
      <div>
         <p>Clique e ative um evento:</p>
         <Button event={meuEvento} text="Primeiro Evento" />
         <Button event={segundoEvento} text="Segundo Evento" />
      </div>
   )
}

export default Evento

// Método meuEvento() - Métodos não tem "Return".
// (`Opa fui ativado! ${numero}`)  Não aceita aspas duplas ou simples ("" ou '') DEVE SER (`)
