// Aula 10 useState
/*
No React JS, é possível pegar o valor de um input através do atributo "value={}" do componente.
Para fazer isso utilizando um componente funcional, basta atribuir ao atributo "value" o valor desejado
e utilizar o evento onChange para atualizar o valor do input quando ele for alterado pelo usuário.

Em um app real o Formuário "Form" é enviado via ajax ou outro método para um lugar definido,
(requisições síncronas e assíncronas SPA)
Neste Exemplo em React, O e.preventDefault() interrompe o envio via Ajax e roda tudo que vem abaixo dele.

Importante: Sem o e.preventDefault() tudo que for digitado no input é perdido.
O e.preventDefault() mantém o conteúdo da última digitação no input.
*/
/*
Sequência para usar o Hook useState:
-DEVE OBRIGATORIAMENTE! Faz o ** import { useState } from "react" **
-DEVE OBRIGATORIAMENTE! Criar as constantes: const [ name, setName ] = useState() que pode ter um valor inicial useState('Milton') 
-DEVE OBRIGATORIAMENTE! Criar o onChange: onChange={(e) => setName(e.target.value)} 
   IMPORTANTE! O setName(e.target.value) Atribui os valores do input as constantes name e password.
-Pode Criar um console.log (function cadastrarUsuario(e) {}) L.28 para visualizar o novo valor no terminal a cada onChange.
   O console.log Recebe os valores via "setName" do input name.
-Ao atribuir um valor Default para useState('Matheus') deve acrescentar o campo value={name} no Form.
*/

import { useState } from "react"

function Form() {

   function cadastrarUsuario(e) {
      e.preventDefault()
      // console.log(name) // Neste exemplo é utiliza apenas para mostrar o valor default de useState("Milton")
      // console.log("Cadastrou o usuario!") // Forma simples.
      // Abaixo: Forma interpolada ( com 2 dados) de uso do console.log OBS: Essa é uma forma de simular o envio do formulário.
      console.log(`O Usuário ${name} foi cadastrado com a senha: ${password}`) 
   }
   

   const [name, setName] = useState()
   const [password, setPassword] = useState()

   return (
      <div>
         <h2>Meu Cadastro</h2>
         <form onSubmit={cadastrarUsuario}>
            <div>
               <label htmlFor="name">Nome:</label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Digite o seu nome."
                  // value={name} Só tem utilida quando useState("Milton") tem valor default.
                  onChange={(e) => setName(e.target.value)}
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
                  onChange={(e) => setPassword(e.target.value)}
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
