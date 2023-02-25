import "../css/DescriptionDuLogement.css";
import icone_etoile_rose from "../img/icone_etoile_rose.png";
import icone_etoile_gris from "../img/icone_etoile_gris.png";

const DescriptionDuLogement = ({ description }) => {
  const createStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <img
          key={i}
          src={rating >= i + 1 ? icone_etoile_rose : icone_etoile_gris}
          alt="etoile"
          className="evaluation_du_logement"
        />
      );
    }
    return stars; };

  return (
    <div className="logement">
      <div className="description_du_logement">
        <div className="titre_du_logement">{description.title}</div>
        <div className="location_du_logement">{description.location}</div>
        <ul className="etiquettes_des_logements">
          {description.tags.map((tag) => (
            <li key={tag} className="etiquette_de_logement">
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="description_du_logement annexe_du_description_du_logement">
        <div className="hote_du_logement">
          <div className="nom_du_hote_du_logement">{description.host.name}</div>
          <div className="image_du_hote_du_logement">
            <img src={description.host.picture} alt={description.host.name} />
          </div>
        </div>
        <div className="score_du_logement">
          {createStars(description.rating)}
        </div>
      </div>
    </div>
  );
}

export default DescriptionDuLogement;