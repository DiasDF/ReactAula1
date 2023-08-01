function Form() {
   function cadastrarUsuario(e) {
      e.preventDefault()
      console.log("Cadastrou o usuario!")
   }

   return (
      <div>
         <h1>Meu Cadastro</h1>
         <form onSubmit={cadastrarUsuario}>
            <div>
               <label htmlFor="name">Nome:</label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Digite o seu nome."
                  // value={name}
               />
            </div>
            <div>
               <label htmlFor="password">Senha:</label>
               <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Digite sua senha."
                  // value="Cadastrar"
                  // onChange={(e) => setPassword(e.target.value)}
               />
            </div>
            <div>
               <input type="submit" value="Cadastrar" />
            </div>
         </form>
      </div>
   )
}

export default Form

/*
Em um app ele vai enviar o Form via ajax para outro lugar definido, (requisições síncronas e assíncronas SPA)
O e.preventDefault() interrompe a execução Ajax e roda tudo que vem abaixo dele.
importante: Sem o e.preventDefault() tudo que for digitado no input é perdido.
O e.preventDefault() mantém o conteúdo da última digitação no input.
*/
