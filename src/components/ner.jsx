import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ReactTooltip from 'react-tooltip'

import { NER } from "../action/index";
import ResultUI from "./result";
import ExplainUI from "./explanation";
import InputUI, { typeOfInputValue } from "./input";
import ExampleUI from "./example";




class NerUI extends Component {
  constructor(props) {
    super(props);

    this.state = { inputValue: "", isShowOutput: false, isTextFormat: true, examples: ["สตีฟกินกล้วย", "ฉันอยากรู้จักเธอ", "เช้าวันนี้แดดลมสงบ", "https://www.mockups.com/best", "https://www.thairath.co.th/content/1033805"], inputType: "", tagList: ["DTM_I", "DES_I", "TRM_I", "DES_B", "BRN_I", "ABB_ORG_I", "BRN_B", "ORG_I", "PER_B", "LOC_B", "ABB_TTL_B", "ABB_DES_I", "TTL_B", "MEA_B", "NUM_B", "TRM_B", "MEA_I", "NUM_I", "ABB_B", "TTL_I", "ABB_LOC_B", "PER_I", "LOC_I", "ABB_LOC_I", "ABB_ORG_B", "O", "NAME_B", "ABB_DES_B", "DTM_B", "ORG_B", "ABB_TTL_I", "__","X", "ABB_I", "ABB_PER_B", "MEA_BI", "PER_I"] };

    this.setInput = this.setInput.bind(this);
  }

  rawText(){
    if (this.props.nerTagList.token_list) return this.props.nerTagList.token_list.map((w, i) => `${w}/${this.props.nerTagList.tag_list[i]} `).join("|");
    else return "Loading" 
  }

  showTextResult(){
    if (this.props.nerTagList.token_list) 
    return <div style={{lineHeight:"200%"}}>
    {
      this.props.nerTagList.token_list.map((w, i) => {
        return <span data-tip={this.props.nerTagList.tag_list[i]!=='O'? this.props.nerTagList.tag_list[i]:""}class={
          this.props.nerTagList.tag_list[i]+" rounded"}>{w} </span>
        })
    }
    <ReactTooltip effect="solid"/> 
    </div>

    else return "Loading"; 
  }

  textResultComponent(){
    
    return <div id="accordion">
        <div class="card">
          <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Colors mapping
              </button>
            </h5>
          </div>
          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
              <div class="row">
               
                  {this.state.tagList.map(e => {
                    return <div class={e + " rounded col-2 mt-1 mb-1 mr-1 ml-1"}>{e}</div>     
                  })}
                
              </div>
            </div>
          </div>
        </div>
      </div>;
  }


  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.inputValue);
    this.setState({ isShowOutput: true });
    this.setState({
      inputType: typeOfInputValue(this.state.inputValue)
    });
    this.props.NER(this.state.inputType, this.state.inputValue);
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
            <ExplainUI topic="Named Entity Recognition" explanation={<div class="alert alert-success" role="alert">
                  <div class="text-dark">
                    Put <strong>Thai Text</strong> or <strong> Website URL </strong> in the box below and hit <strong> Analyze </strong>buttom !  
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
                isTextFormat={true}
                dataForCopy={this.rawText()}
                textData={this.showTextResult()}
                footer={this.textResultComponent()}
                
                jsonData={this.props.nerTagList}
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
  console.log(state.wordList);
  return { nerTagList: state.nerTagList };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ NER }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NerUI);



