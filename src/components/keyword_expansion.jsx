import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { vectorizeWord } from "../action/index";
import ResultUI from "./result";
import ExplainUI from "./explanation";
import InputUI, { typeOfInputValue } from "./input";
import ExampleUI from "./example";
import DropdownUI from "./dropdown";
class KeywordExpansionUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      isShowOutput: false,
      isTextFormat: true,
      examples: [
        "ยามาฮา",
        "เร่งไม่ขึ้น",
        "ช้า",
        "wave",
      ],
      inputType: ""
    };

    this.setInput = this.setInput.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("similarMatrix ", this.props.similarMatrix);
    this.setState({ isShowOutput: true });
    this.setState({
      inputType: typeOfInputValue(this.state.inputValue)
    });
    console.log(this.state.inputValue);
    // this.props.vectorizeWord(`[${this.state.inputValue}]`);
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

  genTable() {
    const d = this.props.expandedWord;
    if (d)
      return <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Expanded Keyword</th>
              <th scope="col">Distance</th>
            </tr>
          </thead>
          <tbody>
            {this.props.expandedWord.map(row => {
              return <tr>
                  <td>{row.word}</td>
                  <td>{row.distance}</td>
                </tr>;
            })}
          </tbody>
        </table>;
  }

  render() {
    return <div class="container">
        <div class="row">
          <div class="col-12">
            <ExplainUI topic={<div>
                  Keyword Expansion <DropdownUI />
                </div>} explanation={<div class="alert alert-success" role="alert">
                  <div class="text-dark">
                    Put <strong>Thai word </strong>in the box below and hit <strong> Analyze </strong> buttom!
                  </div>
                </div>} />
          </div>
          <div class="col-lg-8 col-sm-12">
            <div class="row">
              <div class="col-12">
                <InputUI inputType={this.state.inputType} inputValue={this.state.inputValue} onInputChange={this.onInputChange} placeholder="Ex: สวัสดี"/>
              </div>

              <from onSubmit={this.handleSubmit} class="col-12 mt-4 text-center mb-4">
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
            {this.state.isShowOutput ? (
              <ResultUI
                isTextFormat={true}
                textData={this.genTable()}
                jsonData={this.props.expandedWord}
              />
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>;
  }
}
const mapStateToProps = state => {
  return { expandedWord: state.expandedWord };
};

export default connect(mapStateToProps)(KeywordExpansionUI);
