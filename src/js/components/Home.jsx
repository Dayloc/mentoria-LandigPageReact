import React from "react";
import Card from "./card";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Footer from "./footer";

//include images into your bundle
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

//create your first component
const Home = () => {
  return (
    <div className="container-fluid p-0 text-center ">
      <Navbar />

      <Jumbotron />

      <div className="container m-5">
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

     
      <Footer />
    </div>
  );
};

export default Home;
