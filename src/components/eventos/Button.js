function Button(props) {
   return <button onClick={props.event}>{props.text}</button>
}

export default Button
// Essa function tem a função de retornar um JSX (JavaScript Syntax EXtension )
//Neste exemplo foram omitidos os parenteses em return () pq o código só tem 1 linha.
