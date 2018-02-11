import React, { Component } from "react";

class ExampleUI extends Component {

  render() {
    return <div class="card mt-4 md-4 pd-4" style={{ width: "100%" }}>
        <div class="card-header c4">
          <h5 class="card-title text-white">Try this</h5>
        </div>
        <div class="card-body">
          <ul class="card-text">
            {this.props.examples.map(example => <li key={example}>
                <button type="button" class="btn" onClick={this.props.setInput}>
                  {example}
                </button>
              </li>)}
          </ul>
        </div>
      </div>;
  }
}

export default ExampleUI;
