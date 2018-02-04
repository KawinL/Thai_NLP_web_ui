import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { vectorizeWord } from "../action/index";
import ExplainUI from "./explanation";


class PosUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }

  onInputChange = (e) => {
    const { value } = e.target;
    this.setState({inputValue: value})
    console.log(this.state.inputValue)
  }

  handleSubmit = e => {
    e.preventDefault();
    
    this.props.tokenizeWord(this.state.inputValue);
  };

  render() {
    return <div class="col-9">
        <div class="container application">
          <div class="row">
            <div class="col-12">
              <ExplainUI topic="Part of Speech Tagger" explanation={<div class="alert alert-success" role="alert">
                    <div class="text-dark">
                      This is <strong>Part of Speech Tagger</strong> explaination
                    </div>
                  </div>} />
              <h1>Part of Speech Tagger</h1>
            </div>
            <div class="col-8">
              <div class="row">
                <div class="col-12">
                  <h5>Input</h5>
                  <div class="input-group input-group-lg">
                    <div class="input-group-prepend" />
                    <input type="text" class="form-control rounded" aria-label="Large" aria-describedby="inputGroup-sizing-sm" onChange={this.onInputChange} />
                  </div>
                </div>

                <div class="col-12 mt-4 text-center">
                  <button type="button" class="btn btn-outline-success">
                    Success
                  </button>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">try this</h5>
                  <ul class="card-text">
                    <li>ผีกินกล้วย</li>
                    <li>ผีกินกล้วย</li>
                    <li>ผีกินกล้วย</li>
                    <li>ผีกินกล้วย</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card text-center mt-4">
                <div class="card-header">
                  <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                      <a class="nav-link active">Text</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link">JSON</a>
                    </li>
                  </ul>
                </div>
                <div class="card-body">
                  <p class="card-text">
                    <mark class="bg-danger rounded">ฉัน</mark>|กิน|กล้วยบวชชี
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

const mapStateToProps = state => {
  return { wordList: state.similarMatrix };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ vectorizeWord }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PosUI);
