import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,




} from "recharts";
import Loading from "react-loading-components";

import { classify } from "../action/index";

import ResultUI from "./result";
import ExplainUI from "./explanation";
import InputUI, { typeOfInputValue } from "./input";
import ExampleUI from "./example";
import DropdownUI from "./dropdown";


class TextClassifierUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
      isShowOutput: false,
      isTextFormat: true,
      examples: [
        "https://pantip.com/topic/37393081",
        "https://pantip.com/topic/37392967",
        "https://pantip.com/topic/37396578",
        "https://pantip.com/topic/37395554"
      ],
      inputType: "",
      old_output: null,
      outputStatus: 1
    };

    this.setInput = this.setInput.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      inputType: typeOfInputValue(this.state.inputValue)
    });
    this.setState({ outputStatus: 1 });
    if (this.state.inputValue !== "") {
      this.props.classify(this.state.inputType, this.state.inputValue);
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

  genGraph() {
    const status = this.props.textClasses.status;
    const datao = this.props.textClasses.data;
    let data = []
    if (status === "OK") {
      if (this.state.old_output !== datao) this.setState({
          old_output: datao
        });
      console.log(datao.string_list.length);
      for (var i = 0; i < datao.string_list.length; i++) {
        console.log({
          word: datao.string_list[i],
          similarity: datao.similarity_list[i]
        });
        data.push({
          word: datao.string_list[i],
          similarity: Number(datao.similarity_list[i].toFixed(4))
        });
      }
      console.log(data);
      return <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Expanded Keyword</th>
              <th scope="col">Similarity</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => {
              return <tr>
                  <td>{row.word}</td>
                  <td>{row.similarity}</td>
                </tr>;
            })}
          </tbody>
        </table>;
    } else if (status == "ERROR") {
      if (this.state.old_output != data) this.setState({
          old_output: data
        });
      console.log(this.state.outputStatus);
      return <h1> ERROR {data}</h1>;
    }
  }

  loading() {
    const status = this.props.textClasses.status;
    if (this.props.textClasses.status) {
      console.log(status);
      console.log(this.state.old_output);
      if (this.state.old_output != this.props.textClasses.data) {
        console.log(this.state.old_output);
        console.log(this.props.textClasses.data);
        this.setState({ outputStatus: 2 });
        console.log(this.state.outputStatus);
      }
    }
    return (
      <Loading type="ball_triangle" width={100} height={100} fill="#f44242" />
    );
  }

  render() {
    return <div class="container">
        <div class="row">
          <div class="col-12">
            <ExplainUI topic={<div>
                  Text Categorization <DropdownUI />
                </div>} explanation={<div class="alert alert-success" role="alert">
                  <div class="text-dark">
                    Put <strong>Thai Text</strong> or <strong>
                      {" "}
                      Website URL{" "}
                    </strong> in the box below and hit <strong>
                      {" "}
                      Analyze{" "}
                    </strong>button !
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
                isTextFormat={true}
                textData={
                  this.state.outputStatus == 1
                    ? this.loading()
                    : this.genGraph()
                }
                jsonData={this.props.textClasses.data}
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
  console.log(state)
  return { textClasses: state.textClasses };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ classify }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(TextClassifierUI);
