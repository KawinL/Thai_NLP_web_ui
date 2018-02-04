import React, { Component } from "react";

import "./App.css";

import { BrowserRouter, Route, Link } from "react-router-dom";
import TokenizerUI from "./components/tokenizer";
import WordEmbedderUI from "./components/word-embedder";
import NERUI from "./components/ner";
import PosUI from "./components/pos";
import NavBar from "./components/nav_bar";
import ExplainUI from "./components/explanation";

class App extends Component {
  render() {
    return <BrowserRouter>
        <div>
          <NavBar />
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 mt-4 mb-4">
                <div class="container-fluid">
                  <ExplainUI topic="API DEMO" explanation=
                  {<p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Animi, alias. Dolor error sint nihil nemo
                        commodi maxime excepturi tenetur quos atque,
                        voluptates tempora corrupti recusandae minima
                        asperiores? In, assumenda rerum.
                  </p>} />
                  {/* <h1>API DEMO</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, alias. Dolor error sint nihil nemo commodi maxime excepturi tenetur quos atque, voluptates tempora corrupti recusandae minima asperiores? In, assumenda rerum. 

                  </p> */}
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
