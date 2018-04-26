import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loading from "react-loading-components";

import { tokenizeWord } from "../action/index";
import ResultUI from "./result";
import ExplainUI from "./explanation";
import InputUI, { typeOfInputValue } from "./input";
import ExampleUI from "./example";

class TokenizerUI extends Component{

    constructor(props){
        super(props);

        this.state = { inputValue: "", isShowOutput: false, isTextFormat: true, examples: ["สตีฟกินกล้วย", "ฉันอยากรู้จักเธอ", "เช้าวันนี้แดดลมสงบ", "ตากแดดตากลม", "https://www.thairath.co.th/content/1033805"], inputType: "" , old_output: null, outputStatus: 1};
        
        this.setInput =this.setInput.bind(this);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        console.log('hit');
        console.log(this.state.inputValue)
        
        this.setState({
          inputType: typeOfInputValue(this.state.inputValue)
        });
        this.setState({
          outputStatus: 1
        })
        console.log(this.state.outputStatus);
        console.log(this.props.wordList.status);
        if (this.state.inputValue!=""){
           this.props.tokenizeWord(this.state.inputType, this.state.inputValue);
           this.setState({isShowOutput:true})
        };
        

    }

    genDataForCopy(){
      if (this.props.wordList.status){
        if (this.props.wordList.status=="OK" && this.state.outputStatus==2)
            return this.props.wordList.data.join("|");
      
      }
      return ""

      
    }

    genTextData(){
      const status = this.props.wordList.status;
      const data = this.props.wordList.data;
      if (status =='OK') {
        if (this.state.old_output != data) this.setState({
            old_output: data
          });
          return <div style={{ lineHeight: "200%" }}>
              {data.map(word => (
                <span
                  style={{
                    borderStyle: "solid",
                    wordWrap: "normal",
                    borderColor: "#F46881",
                    padding: "0px 5px",
                    borderWidth: "0 1px 0 0"
                  }}
                >
                  {word}
                </span>
              ))}
            </div>;
        } else if(status == 'ERROR'){
          if (this.state.old_output != data) this.setState({
              old_output: data
            });
          console.log(this.state.outputStatus);
          return (<h1> {data}</h1>)
        }
    }

    genJSONData(){
      if(this.props.wordList.status=="OK") return this.props.wordList.data
      else return {};
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

    loading(){
      const status = this.props.wordList.status;
      if(this.props.wordList.status){
        console.log(status)
        console.log(this.state.old_output)
        if (this.state.old_output != this.props.wordList.data) {
          console.log(this.state.old_output);
          console.log(this.props.wordList.data);
          this.setState({ outputStatus: 2 });
          console.log(this.state.outputStatus);
        }
      }
      return <Loading type="ball_triangle" width={100} height={100} fill="#f44242" />;
    }

    render(){
        return <div class="container">
            <div class="row">
              <div class="col-12">
                <ExplainUI topic="Tokenization" 
                model_description="The process of identifying the boundaries between texts in natural languages to divide these texts into the meaningful unit as word."
                explanation={
                  <div class="alert alert-success" role="alert">    
                      <div class="text-dark">
                        Put <strong>Thai Text</strong> or <strong> Website URL </strong> in the box below and hit <strong> Analyze </strong>button !    
                      </div>
                    </div>} />
              </div>
              <div class="col-lg-8 col-sm-12">
                <div class="row">
                  <div class="col-12">
                    <InputUI inputType={this.state.inputType} inputValue={this.state.inputValue} onInputChange={this.onInputChange} placeholder="Enter text or website url" />
                  </div>

                  <from onSubmit={this.handleSubmit} class="col-12 mt-4 text-center mb-4">
                    <button type="button" class="btn c2" onClick={this.handleSubmit}>
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
                    dataForCopy={this.genDataForCopy()}
                    isTextFormat={true}
                    textData={this.state.outputStatus == 1 ? this.loading():this.genTextData() }
                    jsonData={this.genJSONData()}
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