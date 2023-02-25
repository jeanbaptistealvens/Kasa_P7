import Banniere from "../composants/Banniere";
import Cartes from "../composants/Cartes";
import { Link } from "react-router-dom";
import { useState } from "react";
import Hebergements from "../AnnoncesDehebergement.json";
import imageBanniere from "../img/imagebanniere.png";
import "../css/Cartes.css";

function PageDeDemarrage() {
  const [hebergements] = useState(Hebergements);
  
  return (
    <div>
      <Banniere
        title={"Chez vous, partout et ailleurs"}
        picture={imageBanniere}
        alt={"Photo d'une côte au bord de mer"}
      />
      <div className="conteneur_de_la_carte">
        {hebergements.map((logement) => (
          <Link to={`/logement/${logement.id}`} key={logement.id}>
            <Cartes title={logement.title} cover={logement.cover} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PageDeDemarrage;