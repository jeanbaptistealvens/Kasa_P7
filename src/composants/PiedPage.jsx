function PiedPage() {  
  const annee = new Date().getFullYear(); 
  
  return ( 
    <div className="pied_page"> 
      <div className="logo_du_pied_page"> 
        <img src={require("../img/logo_du_pied_page.png")} alt="logo" className="logo_du_pied_page" /> 
      </div>
      <p className="texte_du_pied_page">{`© ${annee} Kasa. All rights reserved`}</p>
    </div>
  );
}

export default PiedPage; 