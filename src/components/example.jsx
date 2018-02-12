import React, { Component } from "react";

class ExampleUI extends Component {

  render() {
    return <div class="card c1" style={{ width: "100%" }}>
        <h5 class="card-header c1 text-white">try this</h5>
        
        <ul class="list-group list-group-flush">
            {this.props.examples.map(example => (
              <li
                class="list-group-item list-group-item-action border-bottom-0 border-top-0 c1 text-white"
                key={example} 
                onClick={this.props.setInput}
              >
                {example}
              </li>
            ))}
          </ul>
      </div>;
  }
}

export default ExampleUI;
