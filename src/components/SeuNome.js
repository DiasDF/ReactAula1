function SeuNome({ setNome }) {
   return (
      <div>
         <p>Digite seu nome: </p>
         <input
            type="text"
            placeholder="Qual é o seu nome?"
            onChange={(e) => setNome(e.target.value)}
         />
         {/* O evento (e) vai criar um ARROW FUNCTION que ativa o MÉTODO que veio por PROPS alterando o (e.target)*/}
      </div>
   )
}

export default SeuNome
