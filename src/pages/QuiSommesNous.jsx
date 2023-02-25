import Banniere from "../composants/Banniere";
import QuiSommesNousImg from "../img/QuiSommesNous.png";
import PanneauDeroulant from "../composants/PanneauDeroulant";
import "../css/PanneauDeroulant.css";

function QuiSommesNous() {
  
  return (
    <div>
      <Banniere picture={QuiSommesNousImg} alt={"Collage d'images"} />
      <div className="conteneur_du_panneau_deroulant">
        {aboutData.map((value) => (
          <PanneauDeroulant key={value.id} title={value.title} texte={value.texte} />
        ))}
      </div>
    </div>
  );
}

const aboutData = [
  {
    id: 1,
    title: "Fiabilité",
    texte:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    id: 2,
    title: "Respect",
    texte:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    id: 3,
    title: "Service",
    texte:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    id: 4,
    title: "Sécurité",
    texte:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export default QuiSommesNous;