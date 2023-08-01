import PropTypes from "prop-types"
// Importa o prototipador

function Item({ marca, ano_lancamento }) {
   return (
      <>
         {/* <li>{props.marca}</li> */}
         <li>
            {marca} - {ano_lancamento}
         </li>
      </>
   )
}

Item.protoType = {
   marca: PropTypes.string.isRequired,
   ano_lancamento: PropTypes.number.isRequired,
   // data_de_entrega: PropTypes.Date.isRequired,
}

Item.defaultProps = {
   marca: "Faltou a marca",
   ano_lancamento: 0,
}

// Como fica o tipo datas???
// Usar a Prototipação dos objetos (number, string, date..) a propriedade com p minúsculo diferente do Import

export default Item
