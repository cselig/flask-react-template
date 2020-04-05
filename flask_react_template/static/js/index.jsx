import React from "react";
import ReactDOM from "react-dom";

let $ = require("jquery");

function FruitList({fruits}) {
  return (
    <div className="fruit-list">
      {fruits.map((fruit, i) =>
        <div className="item" key={i}>
          <span>{fruit}</span>
        </div>
      )}
    </div>
  );
}

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: [],
      loaded: false,
    };
  }

  componentDidMount() {
    $.getJSON(
      "/get_fruits",
      data => {
        this.setState({fruits: data, loaded: true});
      }
    );
  }

  render() {
    if (this.state.loaded) {
      return (
        <div className="container">
          <h2>Hi!</h2>
          <p>These are some of my very favorite fruits:</p>
          <FruitList fruits={this.state.fruits} />
        </div>
      );
    }
    else { return null; }
  }
}

ReactDOM.render(<Container/>, document.getElementById('app'));
