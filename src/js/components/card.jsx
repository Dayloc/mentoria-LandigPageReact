import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";


//estos parametros los recibe de la home 
const Card = ({ title, description, image }) => {
  return (
    <div className="card ">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;