import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loading from "react-loading-components";

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
      explanationText: (
        <div>
          Put <strong>Thai words</strong> in the box below and hit{" "}
          <strong> Analyze </strong> button to see the similarity of the words!
        </div>
      ),
      old_output: null,
      outputStatus: 1
    };

    this.setInput = this.setInput.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("similarMatrix ", this.props.similarMatrix);
    
    this.setState({ outputStatus: 1 });
    this.setState({
      inputType: typeOfInputValue(this.state.inputValue)
    });
    console.log(this.state.inputValue);
    if (this.state.inputValue !== ""){
      this.props.vectorizeWord(`[${this.state.inputValue}]`); 
      this.setState({ isShowOutput: true });
    } 
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
    const data = this.props.similarMatrix.data;
    const status = this.props.similarMatrix.status;
    if (status === "OK") {
      if (this.state.old_output !== data) this.setState({
          old_output: data
        });
      console.log(data.distances.length);
      return <div>
          {data.distances.length > 20 ? <h3>
              show only top 20
            </h3> : <div></div>}
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Word 1</th>
                <th scope="col">Word 2</th>
                <th scope="col">Similarity</th>
              </tr>
            </thead>
            <tbody>
              {data.distances.slice(0, 20).map(row => {
                return <tr>
                    <td>{row.w1}</td>
                    <td>{row.w2}</td>
                    <td>{row.distance.toFixed(4)}</td>
                  </tr>;
              })}
            </tbody>
          </table>
        </div>;
    } else if (status === "ERROR") {
      if (this.state.old_output !== data) this.setState({
          old_output: data
        });
      console.log(this.state.outputStatus);
      return <h1> {data}</h1>;
    }
  }
  loading() {
    const status = this.props.similarMatrix.status;
    if (this.props.similarMatrix.status) {
      console.log(status);
      console.log(this.state.old_output);
      if (this.state.old_output !== this.props.similarMatrix.data) {
        console.log(this.state.old_output);
        console.log(this.props.similarMatrix.data);
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
              topic="Word Embedding"
              model_description="The process of mapping a word from the vocabulary to vectors of real numbers involving a mathematical embedding."
              explanation={
                <div class="alert alert-success" role="alert">
                  <div class="text-dark">{this.state.explanationText}</div>
                </div>
              }
            />
          </div>
          <div class="col-lg-8 col-sm-12">
            <div class="row">
              <div class="col-12">
                <InputUI
                  enableTypeCheck={false}
                  inputType={this.state.inputType}
                  inputValue={this.state.inputValue}
                  onInputChange={this.onInputChange}
                  placeholder="Ex: สวัสดี, ลองดู, สิ"
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
                textData={
                  this.state.outputStatus === 1
                    ? this.loading()
                    : this.genTable()
                }
                jsonData={this.props.similarMatrix.data}
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
const mapStateToProps = (state) => {
    return { similarMatrix: state.similarMatrix };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({vectorizeWord}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(WordEmbedderUI);