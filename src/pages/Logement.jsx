import { useParams, Navigate } from "react-router-dom";
import Galerie from "../composants/Galerie";
import PanneauDeroulant from "../composants/PanneauDeroulant";
import DescriptionDuLogement from "../composants/DescriptionDuLogement";
import Hebergements from "../AnnoncesDehebergement.json";
import "../css/Logement.css";

function Logement() {
  const { fichelogement } = useParams();
  const descriptionDuLogement = Hebergements.find((logement) => logement.id === fichelogement);

  if (descriptionDuLogement === undefined) {
    return <Navigate to="*" />;
  }

  return (
    <div>
      <Galerie slidesImg={descriptionDuLogement.pictures} />
      <DescriptionDuLogement description={descriptionDuLogement} />
      <div className="panneau_deroulant_du_logement">
      <div className="element_panneau_deroulant_du_logement">
      <PanneauDeroulant title={"Description"} texte={descriptionDuLogement.description} />
        </div>
        <div className="element_panneau_deroulant_du_logement">
        <PanneauDeroulant
            title={"Equipements"}
            texte={descriptionDuLogement.equipments.map((Equipement_txt) => (
              <li className="equipement_du_logement" key={Equipement_txt}>
                {Equipement_txt}
              </li>
            ))}
          />
        </div>
      </div>
    </div>
  );
}


export default Logement;