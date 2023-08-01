import Item from "./Item"

function List() {
   return (
      <div>
         <h1>Minha Lista de Marcas:</h1>
         <ul>
            <Item marca="Ferrari" ano_lancamento={1985} />
            <Item marca="Fiat" ano_lancamento={1964} />
            <Item marca="Honda" />
            {/* OBS: NÚMEROS VEM ENTRE CHAVES {} */}
         </ul>
      </div>
   )
}

export default List
