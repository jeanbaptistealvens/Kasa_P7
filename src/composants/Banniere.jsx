import React from "react";
import PropTypes from "prop-types";
import "../css/Banniere.css";

const Banniere = ({ picture, title, alt }) => {

  return (
    <div className="banniere">
      <img src={picture} alt={alt} className="image_de_la_banniere" />
      <h1 className="titre_de_la_banniere">{title}</h1>
    </div>
  );
};

Banniere.propTypes = {
  picture: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Banniere;