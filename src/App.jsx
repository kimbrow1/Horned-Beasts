// import React from "react";
// import Beast from "./components/Beast";
// import Main from "./components/Main";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import data from "./data.json";




// class App extends React.Component {
//   render() {
//     return (
//       <div className="main-body">
//        <Header />
//        <Main  />
//        <Beast />
//        <Footer />
//       </div>
//        );
//      }
//   }

   
//   export default App;

// import React from "react";
// import Beast from "./components/Beast";
// import Main from "./components/Main";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import "bootstrap/dist/css/bootstrap.min.css";
// import data from "/src/components/data.json";

// class App extends React.Component {
//   handleUpdateState = () => {
//   };

//   render() {
//     return (
//       <div className="main-body">
//         <Header />
//         <Main data={data} updateState={this.handleUpdateState} />
//         <Beast />
//         <Footer />
//       </div>
//     );
//   }
// }

// export default App;


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
