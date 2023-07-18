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
      selectedBeast: null,
      searchValue: "",
      filter: "all"
    };
  }

  handleSelectBeast = (beast) => {
    this.setState({ selectedBeast: beast });
  };

  handleCloseModal = () => {
    this.setState({ selectedBeast: null });
  };

  handleSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    this.setState({ searchValue });
  };

  handleChangeHorns = (event) => {
    const filter = event.target.value; 
    this.setState({ filter });
  };

  render() {
    const { selectedBeast, searchValue, filter } = this.state;
    const { data } = this.props;

    const filteredData = data.filter((beast) => {
      const matchSearch = (
        beast.title.toLowerCase().includes(searchValue) ||
        beast.description.toLowerCase().includes(searchValue)
      );
      const matchHorns = (filter === "all" || beast.horns === parseInt(filter));
      return matchSearch && matchHorns;
    });

    return (
      <Container>
        <input
          className="search"
          type="text"
          value={searchValue}
          onChange={this.handleSearchChange}
          placeholder="Search by title or keyword"
        />
        <select
          className="my-select-class"
          onChange={this.handleChangeHorns}
          value={filter}
        >
          <option value="all">Select Number Of Horns</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <Row>
          {filteredData.map((beast) => (
            <Col key={beast.id} sm={4} onClick={() => this.handleSelectBeast(beast)}>
              <Beast
                title={beast.title}
                imgSrc={beast.image_url}
                description={beast.description}
              />
            </Col>
          ))}
        </Row>
        <Modal show={selectedBeast !== null} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedBeast?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedBeast?.image_url} alt={selectedBeast?.title} />
            <p>{selectedBeast?.description}</p>
          </Modal.Body>
        </Modal>
      </Container>
    );
  }
}

export default Main;
