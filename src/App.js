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

  footer(){
    return <div>
        <div style={{ display: "block", padding: "20px", height: "60px", width: "100%" }} />
        <div class="footer c1 mt-4" style={{ borderTop: "1px solid #E7E7E7", textAlign: "center", padding: "20px", position: "fixed", left: "0", bottom: "0", height: "60px", width: "100%" }}>
          
        </div>
      </div>; 

  }

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
          {this.footer()}
        </div>
      </BrowserRouter>;
  }
}

export default App;
