import React, { Component } from "react";

class DropdownUI extends Component {

    constructor(props){
        super(props)

        this.state = { selected: "motorcycle", selectable: ["motorcycle","General"] };
    }


  render() {
    return <span class="dropdown show">
        <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.state.selected}
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item">motorcycle</a>
        </div>
      </span>;
  }
}

export default DropdownUI;
