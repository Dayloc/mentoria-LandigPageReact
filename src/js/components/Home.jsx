import React, { useState } from "react";
import Card from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";
import SecondCounter from "./secondCounter";
// Imagen
import rigoImage from "../../img/rigo-baby.jpg";

// Datos dinámicos para las Cards
const cardData = [
  {
    title: "Card 1",
    description: "This is the first card.",
    image: rigoImage,
  },
  {
    title: "Card 2",
    description: "This is the second card.",
    image: rigoImage,
  },
  {
    title: "Card 3",
    description: "This is the third card.",
    image: rigoImage,
  },
  {
    title: "Card 4",
    description: "This is the fourth card.",
    image: rigoImage,
  },
];

const Home = () => {
  // Estado para el tiempo de alerta
  const [alertTime, setAlertTime] = useState(null);

  // Función para establecer el tiempo de alerta
  const handleSetAlert = () => {
    const time = prompt("Ingrese el tiempo en segundos para la alerta:");
    setAlertTime(parseInt(time, 10));
  };

  return (
    <div className="container p-0">
      <Navbar />
      <div className="container">
        <Jumbotron />
      </div>

      <div className="text-center m-5">
        <div className="d-flex justify-content-center">
          <div className="row">
            {cardData.map((card, index) => (
              <div key={index} className="col-md-3 col-sm-6 mb-4">
                <Card
                  title={card.title}
                  description={card.description}
                  image={card.image}
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <SecondCounter seconds={0} onAlert={alertTime} /> *
          <button type="button" class="btn btn-info" onClick={handleSetAlert}>
            Establecer Alerta
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
