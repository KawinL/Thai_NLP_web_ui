import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { tokenizeWord } from "../action/index";
import ResultUI from "./result";
import ExplainUI from "./explanation";
import InputUI, { typeOfInputValue } from "./input";
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
            ],
            inputType:""
        }
        
        this.setInput =this.setInput.bind(this);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.inputValue)
        this.setState({isShowOutput:true})
        this.setState({
          inputType: typeOfInputValue(this.state.inputValue)
        });
        this.props.tokenizeWord(this.state.inputType, this.state.inputValue)
    }

    onInputChange = (e) => {
        const { value } = e.target;
        this.setState({ inputValue: value, inputType : typeOfInputValue(value)});
    }

    setInput(e){
      console.log(e.target.innerText);
      this.setState({
        inputValue: e.target.innerText,
        inputType: typeOfInputValue(e.target.innerText)
      });
    }

    render(){
        return <div class="container">
              <div class="row">
                <div class="col-12">
                  <ExplainUI topic="Tokenizer" explanation={<div class="alert c3" role="alert">
                        <div class="text-dark">
                          Put <strong>Thai text</strong> or <strong>Website URL</strong> in the box below and hit <strong>Analyze</strong> button!
                        </div>
                      </div>} />
                </div>
                <div class="col-lg-8 col-sm-12">
                  <div class="row">
                    <div class="col-12">
                      <InputUI inputType={this.state.inputType} inputValue={this.state.inputValue} onInputChange={this.onInputChange} />
                    </div>
                  
                    <from onSubmit={this.handleSubmit} class="col-12 mt-4 text-center">
                      <button type="button" class="btn c3 z-depth-5" onClick={this.handleSubmit}>
                        Analyze
                      </button>
                    </from>
                  </div>
                </div>
                <div class="col-lg-4 col-sm-12">
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
            </div>;
    }
}

const mapStateToProps = (state) => {
    console.log(state.wordList);
    return { wordList: state.wordList };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({tokenizeWord}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TokenizerUI);