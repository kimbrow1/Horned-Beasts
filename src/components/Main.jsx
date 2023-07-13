import React from "react";
import Beast from "./Beast";
import data from "./data.json";

class Main extends React.Component {

    render() {
        let animalComponents = [];
        data.forEach((animal) => {
          animalComponents.push(
            <Beast
              title={animal.title}
              imgSrc={animal.image_url}
              description={animal.description}
            />
          );
        });
        return (
          <div>
            <h2>Animal:</h2>
            {animalComponents}
          </div>
        );
      }
      







export default Main;