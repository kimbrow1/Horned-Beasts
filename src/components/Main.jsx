import React from "react";
import Beast from "./Beast";
import data from "./data.json";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";




class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsShowing: false,
      modalHornedBeastName: "", 
      modalImgUrl: "" 
    };
  }

  handleShow = () => {
    this.setState({ modalIsShowing: true });
  };

  handleClose = () => {
    this.setState({ modalIsShowing: false });
  };

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
        <Button variant="primary" onClick={this.handleShow}>
          Launch
        </Button>
        <Modal show={this.state.modalIsShowing} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Animal</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>{this.state.modalHornedBeastName}</h2>
            <img src={this.state.modalImgUrl} alt="Modal Image" />
          </Modal.Body>
        </Modal>
        <Row>{animalComponents}</Row>
      </Container>
    );
  }
}

export default Main;
