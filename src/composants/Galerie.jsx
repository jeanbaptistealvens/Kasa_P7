import { useState } from "react"; 
import fleche_a_gauche from "../img/fleche_a_gauche.png"; 
import fleche_a_droite from "../img/fleche_a_droite.png"; 
import "../css/Galerie.css"; 

function Galerie({ slidesImg }) { 
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0); 

  const navigate = (step) => { 
    const newIndex = (currentSlideIndex + step + slidesImg.length) % slidesImg.length; 
    setCurrentSlideIndex(newIndex); 
  };

  return ( 
    <div className="galerie"> 
      <div className="image_de_la_galerie"> 
        <img src={slidesImg[currentSlideIndex]} alt="image_lodging" /> 
      </div>
      <div> 
        <div><img src={fleche_a_gauche} alt="fleche a gauche" className={slidesImg.length <= 1 ? "fleche_cacher" : "fleche_a_gauche"} onClick={() => navigate(-1)} /></div> 
        <div className="numero_de_la_galerie">{`${Math.floor(currentSlideIndex + 1)}/${slidesImg.length}`}</div> 
        <div><img src={fleche_a_droite} alt="fleche a droite" className={slidesImg.length <= 1 ? "fleche_cacher" : "fleche_a_droite"} onClick={() => navigate(1)} /></div> 
      </div>
    </div>
  );
}

export default Galerie;