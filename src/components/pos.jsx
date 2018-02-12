import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { POS } from "../action/index";
import ResultUI from "./result";
import ExplainUI from "./explanation";
import InputUI, { typeOfInputValue } from "./input";
import ExampleUI from "./example";

class PosUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      isShowOutput: false,
      isTextFormat: true,
      examples: [
        "ผีกินกล้วย",
        "ฉันอยากรู้จักเธอ",
        "เช้าวันนี้แดดลมสงบ",
        "ตากแดดตากลม",
        "ของที่อยากตัด"
      ],
      inputType: ""
    };

    this.setInput = this.setInput.bind(this);
  }

  rawText() {
    if (this.props.posTagList.token_list)
      return this.props.posTagList.token_list
        .map((w, i) => `${w}/${this.props.posTagList.tag_list[i]} `)
        .join("|");
    else return "Loading";
    // if()
    // return this.props.posTagList.token_list[0]
    // return "TODO: error like wordembeder"
  }

  textResultComponent() {
    return <div />;
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.inputValue);
    this.setState({ isShowOutput: true });
    this.setState({
      inputType: typeOfInputValue(this.state.inputValue)
    });
    this.props.POS(this.state.inputType, this.state.inputValue);
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

  render() {
    return <div class="container">
        <div class="row">
          <div class="col-12">
            <ExplainUI topic="Part of Speech tagger" explanation={<div class="alert alert-success" role="alert">
                  <div class="text-dark">
                    This is <strong>Part of Speech tagger</strong> explanation
                  </div>
                </div>} />
          </div>
          <div class="col-lg-8 col-sm-12">
            <div class="row">
              <div class="col-12">
                <InputUI inputType={this.state.inputType} inputValue={this.state.inputValue} onInputChange={this.onInputChange} />
              </div>

              <from onSubmit={this.handleSubmit} class="col-12 mt-4 text-center">
                <button type="button" class="btn btn-outline-success c2" onClick={this.handleSubmit}>
                  Analyze
                </button>
              </from>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <ExampleUI setInput={this.setInput} examples={this.state.examples} />
          </div>

          <div class="col-12">
            {this.state.isShowOutput ? <ResultUI isTextFormat={true} textData={this.rawText()} // footer={this.textResultComponent()}
                // {this.props.posTagList.token_list.map((w,i) => `${w}/${this.props.posTagList.tag_list[i]}`).join('|')}
                jsonData={this.props.posTagList} /> : <div />}
          </div>
        </div>
      </div>;
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
