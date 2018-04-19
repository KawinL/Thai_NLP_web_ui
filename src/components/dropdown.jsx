import React, { Component } from "react";

class DropdownUI extends Component {

    constructor(props){
        super(props)

        this.state = { selected: this.props.option[0], selectable: this.props.option };
    }

  setSelected(e){
    const {value} = e.target
    console.log(value)
    // this.setState({selected: word});
    // ReactDOM.render()
  }

  render() {
    return <span class="dropdown show">
        <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {this.state.selected}
        </a>

        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <button class="dropdown-item" onCLick={this.setSelected} value="motorcycle">
            mobile
          </button>
          <button class="dropdown-item" onCLick={this.setSelected} value="food">
            food
          </button>
        </div>
      </span>;
  }
}

export default DropdownUI;
