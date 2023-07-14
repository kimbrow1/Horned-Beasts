import React from "react";
import Beast from "./Beast";
import data from "./data.json";
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import  Container  from "react-bootstrap";





class Main extends React.Component {

    render() {
        let animalComponents = [];
        data.forEach((animal) => {
          animalComponents.push(
            <Col>
            <Beast
              title={animal.title}
              imgSrc={animal.image_url}
              description={animal.description}
            />
            </Col>
          );
        });
        return (
          <Container>
            <h2>Animal:</h2>
            <Row>
            {animalComponents}
            </Row>
          </Container>
        );
      }
    } 







export default Main;