function Form() {
   function cadastrarUsuario(e) {
      e.preventDefault()
      console.log("Cadastrou o usuario!")
   }

   return (
      <div>
         <h1>Meu Cadastro</h1>
         <Form onSubmit={cadastrarUsuario}>
            <div>
               <input type="text" placeholder="Digite o seu nome" />
            </div>
            <div>
               <input type="submit" value="Cadastrar" />
            </div>
         </Form>
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
