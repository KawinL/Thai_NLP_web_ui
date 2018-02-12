import React, { Component } from "react";

import "./App.css";

import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
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
              <div class="container-fluid col-12 mt-4 mb-4">
                <div class="mt-4 mb-4">
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
              <div class="col-lg-3 col-md-3 col-sm-12">
                <div class="container-fluid ">
                  <MenuUI head="Foundation" detail={{ Tokenizer: "/tokenizer", "Word Embedder": "/word-embedder", "Name Entity Recognizer": "/ner", "Part of Speech Tagger": "/pos" }} />
                  <MenuUI head="Application" detail={{ "Sentiment Analysis": "/", "Information Extraction": "/", "Keyword Expansion": "/" }} />
                </div>
              </div>
              <div class="container-fluid col-lg-9 col-md-9 col-sm-12">
                <Redirect exact from="/" to="/ner" />
                <Route exact path="/tokenizer" component={TokenizerUI} />
                <Route exact path="/word-embedder" component={WordEmbedderUI} />

                <Route exact path="/ner" component={NERUI} />
                <Route exact path="/pos" component={PosUI} />
              </div>
            </div>
          </div>
          <footer class="footer mt-4 pt-4">
            <div class="card text-center">
              <div class="card-body bg-dark">
                <h5 class="card-title" />
              </div>
            </div>
          </footer>
        </div>
      </BrowserRouter>;
  }
}

export default App;
