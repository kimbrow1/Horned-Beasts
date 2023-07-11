import React from "react";

class Beast extends React.Component {
     render() {
      return (
        <div>
            <h2>{this.props.name}</h2>
            <p>Hi Nice to meet you</p>
        </div>
      ) 
    }
   

}

export default Beast;