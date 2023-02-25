import { Link } from "react-router-dom";
import "../css/PageErreur.css";

function PageErreur() {
  
  return (
    <div className="conteneur_page_erreur ">
      <div className="code_erreur_404">404</div>
      <div className="texte_page_erreur">Oups! La page que vous demandez n'existe pas.</div>
      <Link to="/" className="lien_page_erreur">Retourner sur la page d’accueil</Link>
    </div>
  );
}

export default PageErreur;