import React from "react";
import Beast from "./components/Beast";
import Main from "./components/Main";
import Header from "./components/Header";
import Footer from "./components/Footer";



class App extends React.Component {
  render() {
    return (
      <div>
       <Header />
       <Main />
       <Beast />
       <Footer />
      </div>
       );
     }
  }

  export default App;