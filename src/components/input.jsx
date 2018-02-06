import React, { Component } from "react";

export default class InputUI extends Component{
    constructor(props){
        super(props);

        this.state={typeOfInput: ""}

        this.handleOnInputChange = this.handleOnInputChange.bind(this)
    }
    
    handleOnInputChange(e){
        this.props.onInputChange(e);

        this.setState({typeOfInput:typeOfInputValue(this.props.inputValue)})
    }

    render(){
        return <div>
            <h5>
              Input <span class="badge badge-secondary">
                {this.props.inputType}
              </span>
            </h5>
            <div class="input-group input-group-lg">
              <div class="input-group-prepend" />
              <textarea class="form-control rounded" id="exampleTextarea" rows="3" value={this.props.inputValue} onChange={this.handleOnInputChange} />
              {/* <input type="text" class="form-control rounded" aria-label="Large" aria-describedby="inputGroup-sizing-sm" value={this.props.inputValue} onChange={this.handleOnInputChange} /> */}
            </div>
          </div>;
    }
}

export const typeOfInputValue=(input)=>{
        const web_check_expression = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
        const regex = new RegExp(web_check_expression);

        if (input == "") return "";
        else if (input.match(regex)) return "URL";
             else return "TEXT";
    }