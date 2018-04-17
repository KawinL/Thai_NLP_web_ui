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
import AboutUI from "./components/about";

class App extends Component {

  footer(){
    return <div>
        <div style={{ display: "block", padding: "20px", height: "60px", width: "100%" }} />
        <div class="footer c1 mt-4" style={{ borderTop: "1px solid #E7E7E7", textAlign: "center", padding: "20px", position: "fixed", left: "0", bottom: "0", height: "60px", width: "100%" }}>
          
        </div>
      </div>; 

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <div class="row">
            <div class="col-md-12">
              <NavBar />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-4 col-md-2 c1">
              <MenuUI head="Foundation" detail={{ "Word Tokenization": "/tokenization", "Word Embedding": "/word-embedding", "Name Entity Recognition": "/ner", "Part of Speech Tagging": "/pos" }} />
              <MenuUI head="Application" detail={{ "Sentiment Analysis": "/sentiment-analyzer", "Text Categorization": "/text-categorization", "Keyword Expansion": "/keyword-expansion" }} />
            </div>
            <div class="col-xs-14 col-sm-6 col-md-10">.
                <Route exact path="/tokenization" component={TokenizerUI} />
                <Route exact path="/word-embedding" component={WordEmbedderUI} />

                <Route exact path="/ner" component={NERUI} />
                <Route exact path="/pos" component={PosUI} />

                <Route exact path="/keyword-expansion" component={KeywordExpansionUI} />
                <Route exact path="/text-categorization" component={TextClassifyUI} />
                <Route exact path="/sentiment-analyzer" component={SentimentUI} />

                <Route exact path="/about" component={AboutUI} />
            </div>
          </div>
          <div class="row">
            <div class="col-xs-4 col-md-2 c1">

            </div>
            <div class="col-xs-14 col-sm-6 col-md-10">.

            </div>
          </div>  
        </div>
      </BrowserRouter>);
  }
}

export default App;
