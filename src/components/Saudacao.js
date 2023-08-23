function Saudacao({ nome }) {

   function gerarSaudacao(algumNome) {
      return `Olá, ${algumNome}, tudo bem?`
   }

   return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>
   
}

export default Saudacao

// RETORNE APENAS SE NOME AND <p>{gerarSaudacao(nome) SÃO EQUIVALENTES.
/*
let x = 0;
let y = 1;

x &&= 0; // 0 e 0 = 0? Verdadeiro = 0
x &&= 1; // 0 e 0 = 1? Falso = 0
y &&= 1; // 1
y &&= 0; // 0
*/


/* FORMA SIMPLES
return (
      <>
         <p>Saudação: {nome}!</p>
      </>
   )
*/
