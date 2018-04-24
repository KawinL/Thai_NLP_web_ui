import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loading from "react-loading-components";


import { POS } from "../action/index";
import ResultUI from "./result";
import ExplainUI from "./explanation";
import InputUI, { typeOfInputValue } from "./input";
import ExampleUI from "./example";
import PosResultUI from "./posresult";


class PosUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      isShowOutput: false,
      isTextFormat: true,
      examples: [
        "สตีฟกินกล้วย",
        "ฉันอยากรู้จักเธอ",
        "เช้าวันนี้แดดลมสงบ",
        "https://www.mockups.com/best",
        "https://www.thairath.co.th/content/1033805"
      ],
      inputType: "",
      old_output: null,
      outputStatus: 1
    };

    this.setInput = this.setInput.bind(this);
  }

  rawText() {
    if (this.props.posTagList.status)
      if (this.props.posTagList.status == "OK")
        return this.props.posTagList.data.token_list
          .map(
            (w, i) => `${w}/${this.props.posTagList.data.tag_list[i]} `
          )
          .join("|");
      else return "";
  }

  textResultComponent() {
    const status = this.props.posTagList.status;
    const data = this.props.posTagList.data;
    if (status == "OK") {
      if (this.state.old_output != data) this.setState({
          old_output: data
        });
      return <PosResultUI pos={this.props.posTagList.data} />;
    } else if (status == "ERROR") {
      if (this.state.old_output != data+this.state.inputValue) this.setState({
          old_output: data+this.state.inputValue
        });
      console.log(this.state.outputStatus);
      return <h1> ERROR {data}</h1>;
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.inputValue);
    this.setState({
      inputType: typeOfInputValue(this.state.inputValue)
    });
    this.setState({ outputStatus: 1 });
    if (this.state.inputValue!=""){
              this.props.POS(this.state.inputType, this.state.inputValue);
              this.setState({isShowOutput:true})
    };
    
  };

  onInputChange = e => {
    const { value } = e.target;
    this.setState({ inputValue: value, inputType: typeOfInputValue(value) });
  };

  setInput(e) {
    console.log(e.target.innerText);
    this.setState({
      inputValue: e.target.innerText,
      inputType: typeOfInputValue(e.target.innerText)
    });
  }

  loading() {
    const status = this.props.posTagList.status;
    if (this.props.posTagList.status) {
      console.log(status);
      console.log(this.state.old_output);
      if (this.state.old_output != this.props.posTagList.data) {
        console.log(this.state.old_output);
        console.log(this.props.posTagList.data);
        this.setState({ outputStatus: 2 });
        console.log(this.state.outputStatus);
      }
    }
    return (
      <Loading type="ball_triangle" width={100} height={100} fill="#f44242" />
    );
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-12">
            <ExplainUI
              topic="Part of Speech tagger"
              model_description="Predict Part-of-Speech of each words in a sentence"
              explanation={
                <div class="alert alert-success" role="alert">
                  <div class="text-dark">
                    Put <strong>Thai Text</strong> or{" "}
                    <strong> Website URL </strong> in the box below and hit{" "}
                    <strong> Analyze </strong>button !
                  </div>
                </div>
              }
            />
          </div>
          <div class="col-lg-8 col-sm-12">
            <div class="row">
              <div class="col-12">
                <InputUI
                  inputType={this.state.inputType}
                  inputValue={this.state.inputValue}
                  onInputChange={this.onInputChange}
                  placeholder="Enter text or website url"
                />
              </div>

              <from
                onSubmit={this.handleSubmit}
                class="col-12 mt-4 text-center mb-4"
              >
                <button
                  type="button"
                  class="btn c2"
                  onClick={this.handleSubmit}
                >
                  Analyze
                </button>
              </from>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <ExampleUI
              setInput={this.setInput}
              examples={this.state.examples}
            />
          </div>

          <div class="col-12">
            {this.state.isShowOutput ? (
              <ResultUI
                isTextFormat={true}
                textData={this.state.outputStatus == 1
                    ? this.loading()
                    : this.textResultComponent()}
                dataForCopy={this.rawText()}
                jsonData={this.props.posTagList.data}
              />
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.wordList);
  return { posTagList: state.posTagList };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ POS }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PosUI);
