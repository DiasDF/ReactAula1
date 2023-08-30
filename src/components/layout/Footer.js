import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
function Footer() {
   return (
      <footer className="Footer">
         <ul>
            <li className="social-list Facebook">
               <FaFacebook />
            </li>
            <li className="social-list Instagram">
               <FaInstagram />
            </li>
            <li className="social-list Youtube">
               <FaYoutube />
            </li>
         </ul>
         <h2>Nosso Footer</h2>
      </footer>
   )
}

export default Footer
