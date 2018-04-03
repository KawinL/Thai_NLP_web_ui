import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { vectorizeWord } from "../action/index";
import ResultUI from "./result";
import ExplainUI from "./explanation";
import InputUI, { typeOfInputValue } from "./input";
import ExampleUI from "./example";

class WordEmbedderUI extends Component {
  constructor(props) {
    super(props);


    this.state = {
      inputValue: "",
      isShowOutput: false,
      isTextFormat: true,
      examples: [
        "แม่, พ่อ, พี่",
        "กิน, นอน, รับประทาน",
        "หมู, นก, หมา",
        "เร็ว, ช้า, สวย"
      ],
      inputType: "",
      explanationText : <div>Put <strong>Thai words</strong> in the box below and hit <strong> Analyze </strong> buttom to see the similarity of the words!</div>
    };

    this.setInput = this.setInput.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("similarMatrix ",this.props.similarMatrix);
    this.setState({ isShowOutput: true });
    this.setState({
      inputType: typeOfInputValue(this.state.inputValue)
    });
    console.log(this.state.inputValue);
    this.props.vectorizeWord( `[${this.state.inputValue}]`);
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

  genTable(){
    const d = this.props.similarMatrix.distances;
    if(d) return <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Word 1</th>
              <th scope="col">Word 2</th>
              <th scope="col">Similarity</th>
            </tr>
          </thead>
          <tbody>
            {this.props.similarMatrix.distances.map(row => {
                return <tr>
                    <td>{row.w1}</td>
                    <td>{row.w2}</td>
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
            <ExplainUI topic="Word Embedding" explanation={<div class="alert alert-success" role="alert">
                  <div class="text-dark">{this.state.explanationText}</div>
                </div>} />
          </div>
          <div class="col-lg-8 col-sm-12">
            <div class="row">
              <div class="col-12">
                <InputUI enableTypeCheck={false} inputType={this.state.inputType} inputValue={this.state.inputValue} onInputChange={this.onInputChange} placeholder="Ex: สวัสดี, ลองดู, สิ" />
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
                jsonData={this.props.similarMatrix}
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
    return { similarMatrix: state.similarMatrix };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({vectorizeWord}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WordEmbedderUI);