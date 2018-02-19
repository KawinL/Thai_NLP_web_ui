import React, { Component } from "react";

import "./App.css";

import { BrowserRouter, Route, Redirect } from "react-router-dom";
import TokenizerUI from "./components/tokenizer";
import WordEmbedderUI from "./components/word-embedder";
import NERUI from "./components/ner";
import PosUI from "./components/pos";
import NavBar from "./components/nav_bar";
import ExplainUI from "./components/explanation";
import MenuUI from "./components/menu";
import KeywordExpansionUI from "./components/keyword_expansion";
import SentimentUI from "./components/sentiment";
import TextClassifyUI from "./components/text_classify";

class App extends Component {
  render() {
    return <BrowserRouter>
        <div>
          <NavBar />
          <div class="container-fluid">
            <div class="row">
              <div class="container-fluid col-12 mt-4 mb-4">
                <div class="mt-4 mb-4">
                  <ExplainUI topic="API DEMO" explanation={<p />} />
                </div>
                <hr />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12">
                <div class="container-fluid ">
                  <MenuUI head="Foundation" detail={{ "Word Tokenization": "/tokenization", "Word Embedding": "/word-embedding", "Name Entity Recognition": "/ner", "Part of Speech Tagging": "/pos" }} />
                  <MenuUI head="Application" detail={{ "Sentiment Analysis": "/sentiment-analyser", "Text Categorization": "/text-categorization", "Keyword Expansion": "/keyword-expansion" }} />
                </div>
              </div>
              <div class="container-fluid col-lg-9 col-md-9 col-sm-12">
                <Redirect exact from="/" to="/pos" />
                <Route exact path="/tokenization" component={TokenizerUI} />
                <Route exact path="/word-embedding" component={WordEmbedderUI} />

                <Route exact path="/ner" component={NERUI} />
                <Route exact path="/pos" component={PosUI} />

                <Route exact path="/keyword-expansion" component={KeywordExpansionUI} />
                <Route exact path="/text-categorization" component={TextClassifyUI} />
                <Route exact path="/sentiment-analyser" component={SentimentUI} />
              </div>
            </div>
          </div>
          <footer class="footer mt-4 pt-4">
            <div class="card">
              <div class="card-body bg-dark" />
            </div>
          </footer>
        </div>
      </BrowserRouter>;
  }
}

export default App;
