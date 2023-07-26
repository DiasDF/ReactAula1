function Evento() {
   function meuEvento() {
      console.log("Opa fui ativado!")
   }

   return (
      <>
         <p>Clique e ative um evento:</p>
         <button onClick={meuEvento}>Ativar!</button>
      </>
   )
}

export default Evento
