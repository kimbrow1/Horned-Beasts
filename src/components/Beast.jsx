import React from "react";

class Beast extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        favoriteCount:0,
      };
    }

    handlefavorite = () => {
      this.setState ({
        favoriteCount: this.state.favoriteCount + 1,
      });
    };

    render() {
      return (
       <div>
        <h2>{this.props.title}</h2>
        <p>Favorite Count: {this.state.favoriteCount}</p>
        <img src={this.props.imgSRC} onClick={this.handlefavorite} />
       </div> 
      );
    }
  }

export default Beast;