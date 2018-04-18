import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactTooltip from 'react-tooltip'
import Loading from "react-loading-components";

import { NER } from "../action/index";
import ResultUI from "./result";
import ExplainUI from "./explanation";
import InputUI, { typeOfInputValue } from "./input";
import ExampleUI from "./example";
import "./style.css"
import {ner_tag_list} from "./ner_tag_list";


class NerUI extends Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: "", 
    isShowOutput: false, 
    isTextFormat: true, 
    examples: ["สตีฟกินกล้วย", "ฉันอยากรู้จักเธอ", "เช้าวันนี้แดดลมสงบ", "https://www.mockups.com/best", "https://www.thairath.co.th/content/1033805"], 
    inputType: "", 
    tagList: ['DTM_B','DTM_I','DES_B','DES_I','TTL_B','TTL_I','BRN_B','BRN_I','PER_B','PER_I','MEA_B','MEA_I','NUM_B','NUM_I','LOC_B','LOC_I','TRM_B','TRM_I','ORG_B','ORG_I','ABB_ORG_B','ABB_ORG_I','ABB_LOC_B','ABB_LOC_I','ABB_DES_B','ABB_DES_I','ABB_PER_B','ABB_PER_I','ABB_TTL_B','ABB_TTL_I','ABB_B','ABB_I'], 
    old_output: null, 
    outputStatus: 1 };

    this.setInput = this.setInput.bind(this);
  }

  rawText() {
    if (this.props.nerTagList.status) if (this.props.nerTagList.status == "OK") return this.props.nerTagList.data.token_list
          .map((w, i) => `${w}/${this.props.nerTagList.data.tag_list[i]} `)
          .join("|");
      else return "";
  }

  showTextResult() {
    const status = this.props.nerTagList.status;
    const data = this.props.nerTagList.data;
     if (status == "OK") {
       if (this.state.old_output != data) this.setState({
           old_output: data
         });
       return <div style={{ lineHeight: "200%" }}>
           {data.token_list.map((w, i) => {
             return <span data-tip={data.tag_list[i] !== "O" ? data.tag_list[i] : "O"} class={data.tag_list[i] + " rounded"}>
                 {w}{" "}
               </span>;
           })}
           <ReactTooltip effect="solid" />
         </div>;
     } else if (status == "ERROR") {
       if (this.state.old_output != data) this.setState({
           old_output: data
         });
       console.log(this.state.outputStatus);
       return <h1> ERROR {data}</h1>;
     }

  }

  textResultComponent() {
    return (
      <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button
                class="btn btn-link"
                data-toggle="collapse"
                data-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Colors mapping
              </button>
            </h5>
          </div>
          <div
            id="collapseOne"
            class="collapse"
            aria-labelledby="headingOne"
            data-parent="#accordion"
          >
            <div class="card-body">
              <div class="row">
                {this.state.tagList.map(e => {
                  return (
                    <div class={e + " rounded col-2 mt-1 mb-1 mr-1 ml-1"}>
                      {e}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.inputValue);
    this.setState({
      inputType: typeOfInputValue(this.state.inputValue)
    });
    this.setState({ outputStatus: 1 });
    if (this.state.inputValue!=""){
           this.props.NER(this.state.inputType, this.state.inputValue);
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
    const status = this.props.nerTagList.status;
    if (this.props.nerTagList.status) {
      console.log(status);
      console.log(this.state.old_output);
      if (this.state.old_output != this.props.nerTagList.data) {
        console.log(this.state.old_output);
        console.log(this.props.nerTagList.data);
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
              topic="Named Entity Recognition"
              model_description="Predict Named entity of each words in a sentence"
              explanation={
                <div class="alert alert-success" role="alert">
                  <div class="text-dark font-light">
                    Put <strong>Thai Text</strong> or{" "}
                    <strong> Website URL </strong> in the box below and hit{" "}
                    <strong> Analyze </strong>buttom !
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
                dataForCopy={this.rawText()}
                textData={
                  this.state.outputStatus == 1
                    ? this.loading()
                    : this.showTextResult()
                }
                footer={this.textResultComponent()}
                jsonData={this.props.nerTagList.data}
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
  console.log(state.nerTagList);
  return { nerTagList: state.nerTagList };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ NER }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NerUI);



