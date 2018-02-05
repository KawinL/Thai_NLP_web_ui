import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { tokenizeWord } from "../action/index";
import ResultUI from "./result";
import ExplainUI from "./explanation";
import InputUI from "./input";
import ExampleUI from "./example";

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
      console.log(e.target.innerText);
      this.setState({ inputValue: e.target.innerText });
    }

    render(){
        return <div class="col-9">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <ExplainUI topic="Tokenizer" explanation={<div class="alert alert-success" role="alert">
                        <div class="text-dark">
                          This is <strong>Tokenizer</strong> explanation
                        </div>
                      </div>} />
                </div>
                <div class="col-8">
                  <div class="row">
                    <div class="col-12">
                      <InputUI inputValue={this.state.inputValue} onInputChange={this.onInputChange} />
                    </div>

                    <from onSubmit={this.handleSubmit} class="col-12 mt-4 text-center">
                      <button type="button" class="btn btn-outline-success z-depth-5" onClick={this.handleSubmit}>
                        Analyze
                      </button>
                    </from>
                  </div>
                </div>
                <div class="col-4">
                  <ExampleUI setInput={this.setInput} examples={this.state.examples} />
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