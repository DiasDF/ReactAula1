function Evento({ numero }) {
   // Método meuEvento - Métodos não tem "Return".
   function meuEvento() {
      console.log(`Opa fui ativado! ${numero}`)
   }
   // (`Opa fui ativado! ${numero}`)  Não aceita aspas duplas ou simples ("" ou '') DEVE SER (`)  
   return (
      <div>
         <p>Clique e ative um evento:</p>
         <button onClick={meuEvento}>Ativar!</button>
      </div>
   )
}

export default Evento
