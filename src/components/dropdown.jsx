import React, { Component } from "react";

class DropdownUI extends Component {

    constructor(props){
        super(props)

        this.state = { selected: "food", selectable: ["motorcycle","General"] };
    }

setSelected(word){
  // this.setState({selected: word});
  // ReactDOM.render()
  }

  render() {
    return <span class="dropdown show">
        <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.state.selected}
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" onCLick={this.setSelected('motorcycle')}>motorcycle</a>
          <a class="dropdown-item" onCLick={this.setSelected('food')}>food</a>
        </div>
      </span>;
  }
}

export default DropdownUI;
