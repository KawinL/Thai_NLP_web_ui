import React, { Component } from "react";

class ExampleUI extends Component {

  render() {
    return <div class="card mt-4 md-4 pd-4" style={{ width: "100%" }}>
        <div class="card-body">
          <h5 class="card-title">try this</h5>
          <ul class="list-group list-group-flush">
            {this.props.examples.map(example => (
              <li
                class="list-group-item list-group-item-action border-bottom-0 border-top-0"
                key={example} 
                onClick={this.props.setInput}
              >
                {example}
              </li>
            ))}
          </ul>
        </div>
      </div>;
  }
}

export default ExampleUI;
