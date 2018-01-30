import React, { Component } from "react";

import "./App.css";

import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from "antd";
import TokenizerUI from "./components/tokenizer";
import WordEmbedderUI from "./components/word-embedder";
import NERUI from "./components/ner";
import PosUI from "./components/pos";

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;
const MenuItemGroup = Menu.ItemGroup;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return <BrowserRouter>
        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light rounded clearfix z-depth-5">
            <a class="navbar-brand float-left" href="#">
              Thai NLP Platform
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse float-right" id="navbarsExample09">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Download
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    API
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 mt-4 mb-4">
                <div class="container-fluid">
                  <h1>API DEMO</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, alias. Dolor error sint nihil nemo commodi maxime excepturi tenetur quos atque, voluptates tempora corrupti recusandae minima asperiores? In, assumenda rerum.
                  </p>
                </div>
                <hr />
              </div>
              <div class="col-lg-3 col-md-12">
                <div class="container-fluid">
                  <div class="card" style={{ width: "18rem" }}>
                    <div class="card-header text-success border-info">
                      Foundation
                    </div>
                    <ul class="list-group list-group-flush">
                      <Link to={"/tokenizer"}>
                        <li class="list-group-item list-group-item-action border-bottom-0">
                          Tokenizer
                        </li>
                      </Link>
                      <Link to={"/word-embedder"}>
                        <li class="list-group-item list-group-item-action border-bottom-0 border-top-0">
                          Word Embedder
                        </li>
                      </Link>
                      <Link to={"/ner"}>
                        <li class="list-group-item list-group-item-action border-bottom-0 border-top-0">
                          Name Entity Recognizer
                        </li>
                      </Link>
                      <Link to={"/tokenizer"}>
                        <li class="list-group-item list-group-item-action border-bottom-0 border-top-0">
                          Part of Speech Tagger
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <div class="card" style={{ width: "18rem" }}>
                    <div class="card-header text-success border-info">
                      Application
                    </div>
                    <ul class="list-group list-group-flush disable">
                      <li class="list-group-item list-group-item-action border-bottom-0">
                        Sentiment Analysis
                      </li>
                      <li class="list-group-item list-group-item-action border-bottom-0 border-top-0">
                        Information Extraction
                      </li>
                      <li class="list-group-item list-group-item-action border-top-0">
                        Keyword Expansion
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* <Redirect exact from='/' to='/tokenizer' /> */}
              <Route exact path="/tokenizer" component={TokenizerUI} />
              <Route exact path="/word-embedder" component={WordEmbedderUI} />

              <Route exact path="/ner" component={NERUI} />
              <Route exact path="/pos" component={PosUI} />
            </div>
          </div>
        </div>
      </BrowserRouter>;
  }
}

export default App;
