import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  ComposedChart,
  Area
} from "recharts";


import { vectorizeWord } from "../action/index";
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
      examples: ["ยามาฮา", "เร่งไม่ขึ้น", "ช้า", "wave"],
      inputType: ""
    };

    this.setInput = this.setInput.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ isShowOutput: true });
    this.setState({
      inputType: typeOfInputValue(this.state.inputValue)
    });
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
    if (this.props.textClasses) {
      let sentimentValue = this.props.textClasses;
      let data = [
        { key: "problem", value: sentimentValue.problem },
        { key: "Not problem", value: sentimentValue.notProblem },
      ];
      return <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="key" />
            <YAxis yAxisId="a" dataKey="value" type="number" domain={[0, 1]} />

            <Tooltip />
            <CartesianGrid vertical={false} />
            <Bar yAxisId="a" dataKey="value">
              
              <Cell key="cell-1" fill="#fff888" />
              <Cell key="cell-2" fill="#fa8475" />
              
            </Bar>
          </BarChart>
        </ResponsiveContainer>;
    }
    return "Loading";
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
                    </strong>buttom !
                  </div>
                </div>} />
          </div>
          <div class="col-lg-8 col-sm-12">
            <div class="row">
              <div class="col-12">
                <InputUI inputType={this.state.inputType} inputValue={this.state.inputValue} onInputChange={this.onInputChange} placeholder="Enter text or website url"/>
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
            {this.state.isShowOutput ? (
              <ResultUI
                isTextFormat={false}
                textData={this.genGraph()}
                jsonData={this.props.textClasses}
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
  return { textClasses: state.textClasses };
};

export default connect(mapStateToProps)(TextClassifierUI);
