import { NavLink } from "react-router-dom";
import enteteLogo from "../img/logo_de_l_entete.png";

const Entete = () => (
  <header className="entete">
    <img src={enteteLogo} alt="logo" className="logo_entete" />
    <nav>
      <NavLink to="/" className="navigation" isactive={true}>Accueil</NavLink>
      <NavLink to="/QuiSommesNous" className="navigation" isactive={true}>A propos</NavLink>
    </nav>
  </header>
);

export default Entete;