import { useState } from "react"; 
import fermeture from "../img/vector_fermeture.png"; 
import ouverture from "../img/vector_ouverture.png"; 
import "../css/PanneauDeroulant.css";

function PanneauDeroulant({ title, texte }) { 
  const [ouvert, setOuvert] = useState(false); 
  const [texteOuvert, setTexteOuvert] = useState(false);

  return (
    <div className="panneau_deroulant"> 
      <div className="entête_du_panneau_deroulant" onClick={() => setOuvert(!ouvert)}> 
        <span className="titre_du_panneau_deroulant">{title}</span> 
        <img src={ouvert ? fermeture : ouverture} alt="fleche du panneau_deroulant" className="image_du_panneau_deroulant" /> 
      </div>
      {ouvert && ( 
        <p className="texte_du_panneau_deroulant" onClick={() => setTexteOuvert(!texteOuvert)}>
          {texteOuvert ? null : texte}
        </p>
      )}
    </div>
  );
}

export default PanneauDeroulant; 