import React, { Component } from "react";

import { Input, Form, Icon, Button, Checkbox } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { vectorizeWord } from "../action/index";

class NERUI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target;
    this.props.tokenizeWord(this.state.inputValue);
  };

  render() {
    return <div class="col-9">
        <div class="container application">
          <div class="row">
            <div class="col-12">
              <h1>Name Entity Recognizer</h1>
              <div class="alert alert-success" role="alert">
                <div class="text-dark">
                  This is <strong>Name Entity Recognizer</strong> explaination
                </div>
              </div>
            </div>
            <div class="col-8">
              <div class="row">
                <div class="col-12">
                  <h5>Input</h5>
                  <div class="input-group input-group-lg">
                    <div class="input-group-prepend" />
                    <input type="text" class="form-control rounded" aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
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
                      <a class="nav-link active" href="#">
                        Text
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">
                        JSON
                      </a>
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

export default connect(mapStateToProps, mapDispatchToProps)(NERUI);
