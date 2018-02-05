import React, { Component } from "react";

import "./App.css";

import { BrowserRouter, Route, Link } from "react-router-dom";
import TokenizerUI from "./components/tokenizer";
import WordEmbedderUI from "./components/word-embedder";
import NERUI from "./components/ner";
import PosUI from "./components/pos";
import NavBar from "./components/nav_bar";
import ExplainUI from "./components/explanation";
import MenuUI from "./components/menu";

class App extends Component {
  render() {
    return <BrowserRouter>
        <div>
          <NavBar />
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 mt-4 mb-4">
                <div class="container-fluid">
                  <ExplainUI topic="API DEMO" explanation={<p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Animi, alias. Dolor error sint nihil nemo
                        commodi maxime excepturi tenetur quos atque,
                        voluptates tempora corrupti recusandae minima
                        asperiores? In, assumenda rerum.
                      </p>} />
                </div>
                <hr />
              </div>
              <div class="col-lg-3 col-md-12">
                <div class="container-fluid">
                  <MenuUI head="Foundation" detail={{ Tokenizer: "/tokenizer", "Word Embedder": "/word-embedder", "Name Entity Recognizer": "/ner", "Part of Speech Tagger": "/pos" }} />
                  <MenuUI head="Application" detail={{ "Sentiment Analysis": "/", "Information Extraction": "/", "Keyword Expansion": "/", }} />
                  
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
