import React, { Component } from "react";


class ResultUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTextFormat: this.props.isTextFormat
    };
  }

  jsonResult() {
    return (
      <div class="card text-center mt-4">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a
                class="nav-link "
                onClick={() => this.setState({ isTextFormat: true })}
              >
                Text
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" >
                JSON
              </a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <p class="card-text">
            {this.props.jsonData}
          </p>
        </div>
      </div>
    );
    }

    textResult(){
        return(
                  <div class="card text-center mt-4">
                    
                    <div class="card-header">
                      <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item">
                          <a class="nav-link active" >
                            Text
                          </a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link"  onClick={()=>this.setState({isTextFormat:false})}>
                            JSON
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="card-body">
                      <p class="card-text">{this.props.textData}</p>
                    </div>
                  </div>
                )
    }

    render() {
        return this.state.isTextFormat?(this.textResult()):(this.jsonResult())
        
    }
  
}

export default ResultUI;