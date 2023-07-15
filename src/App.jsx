import React from "react";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./components/data.json";

class App extends React.Component {
  render() {
    return (
      <div className="main-body">
        <Header />
        <Main data={data} />
        <Footer />
      </div>
    );
  }
}

export default App;
