import { Link } from 'react-router-dom'
import styles from './Layout.css'

function Navbar() {
   return (
      <ul className="list">
         <li className="item">
            <Link to="/">Home</Link>
         </li>
         <li className="item">
            <Link to="/Empresa">Empresa</Link>
         </li>
         <li className="item">
            <Link to="/Contato">Contato</Link>
         </li>
      </ul>
   )
}

export default Navbar
