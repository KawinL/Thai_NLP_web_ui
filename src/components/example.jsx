import React, { Component } from "react";

class ExampleUI extends Component {

  render() {
    return <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title">try this</h5>
          <ul class="card-text">
            {this.props.examples.map(example => <li key={example}>
                <button type="button" class="btn btn-link" onClick={this.props.setInput}>
                  {example}
                </button>
              </li>)}
          </ul>
        </div>
      </div>;
  }
}

export default ExampleUI;
