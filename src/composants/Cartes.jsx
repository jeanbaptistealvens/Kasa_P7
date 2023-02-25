import "../css/Cartes.css";

function Cartes({ title, cover }) {
  
  return (
    <div className="carte">
      <img src={cover} alt={title} className="image_de_la_carte" />
      <div className="conteneur_du_titre_de_la_carte">
        <h1 className="titre_de_la_carte">{title}</h1>
      </div>
    </div>
  );
}

export default Cartes;