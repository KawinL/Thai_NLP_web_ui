import React, { Component } from "react";

export default class InputUI extends Component{
    constructor(props){
        super(props);

        this.state={typeOfInput: ""}

        this.handleOnInputChange = this.handleOnInputChange.bind(this)
    }
    
    handleOnInputChange(e){
        this.props.onInputChange(e);

        this.typeOfInputValue();
    }

    typeOfInputValue(){
        const web_check_expression = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
        const regex = new RegExp(web_check_expression);

        if(this.props.inputValue=='') this.setState(
                                        {
                                          typeOfInput:
                                            ""
                                        }
                                      );
        else if(this.props.inputValue.match(regex))this.setState(
                                                     {
                                                       typeOfInput:
                                                         "URL"
                                                     }
                                                   );
        else this.setState({ typeOfInput: "TEXT" });
    }

    render(){
        return <div>
            <h5>
              Input <span class="badge badge-secondary">
                {this.state.typeOfInput}
              </span>
            </h5>
            <div class="input-group input-group-lg">
              <div class="input-group-prepend" />
              <input type="text" class="form-control rounded" aria-label="Large" aria-describedby="inputGroup-sizing-sm" value={this.props.inputValue} onChange={this.handleOnInputChange} />
            </div>
          </div>;
    }
}