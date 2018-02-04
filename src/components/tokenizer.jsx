import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { tokenizeWord } from "../action/index";
import ResultUI from "./result";
import ExplainUI from "./explanation";

class TokenizerUI extends Component{

    constructor(props){
        super(props);


        this.state = {
            inputValue: '',
            isShowOutput: false,
            isTextFormat: true,
            examples: [
              "ผีกินกล้วย",
              "ฉันอยากรู้จักเธอ",
              "เช้าวันนี้แดดลมสงบ",
              "ตากแดดตากลม",
              "ของที่อยากตัด"
            ]
        }

        this.setInput  =this.setInput.bind(this);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.inputValue)
        this.setState({isShowOutput:true})
        this.props.tokenizeWord(this.state.inputValue)
    }

    onInputChange = (e) => {
        const { value } = e.target;
        this.setState({inputValue: value});
    }

    setInput(e){
      // console.log(e.target.text())
      // this.setState({inputValue: value});
    }

    // generateExample(){
    //   return 
    // }

    render(){
        return <div class="col-9">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <ExplainUI topic="Tokenizer" explanation={
                      <div class="alert alert-success" role="alert">
                        <div class="text-dark">
                          This is <strong>Tokenizer</strong> explanation
                        </div>
                      </div>} />
                </div>
                <div class="col-8">
                  <div class="row">
                    <div class="col-12">
                      <h5>Input</h5>
                      <div class="input-group input-group-lg">
                        <div class="input-group-prepend" />
                        <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing-sm" value={this.state.inputValue} onChange={this.onInputChange} />
                      </div>
                    </div>

                    <from onSubmit={this.handleSubmit} class="col-12 mt-4 text-center">
                      <button type="button" class="btn btn-outline-success z-depth-5" onClick={this.handleSubmit}>
                        Analyze
                      </button>
                    </from>
                  </div>
                </div>
                <div class="col-4">
                  <div class="card" style={{ width: "18rem" }}>
                    <div class="card-body">
                      <h5 class="card-title">try this</h5>
                      <ul class="card-text">
                        {this.state.examples.map(example => <li>
                            <button type="button" class="btn btn-link" onClick={this.setInput}>
                              {example}
                            </button>
                          </li>)}
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col-12">
                  {this.state.isShowOutput ? (
                    <ResultUI
                      isTextFormat={true}
                      textData={this.props.wordList.map(
                        word => word + "|"
                      )}
                      jsonData={this.props.wordList}
                    />
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>
          </div>;
    }
}

const mapStateToProps = (state) => {
    return { wordList: state.wordList };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({tokenizeWord}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenizerUI);