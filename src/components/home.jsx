import React, { Component } from "react";

import { vectorizeWord } from "../action/index";
import ResultUI from "./result";
import ExplainUI from "./explanation";
import InputUI, { typeOfInputValue } from "./input";
import ExampleUI from "./example";
import DropdownUI from "./dropdown";

import lab_logo from "../images/datamind.png"
import cpcu_logo from "../images/cpcu.png"
import can from "../images/can.jpg"
import kawin from "../images/kawin.jpg"
import ammarin from "../images/ammarin.jpg"
import chavisa from "../images/chavisa.jpg"
import nectec_logo from "../images/nectec_logo.jpg"
class SentimentUI extends Component {

  render() {
    return <div class="container" style={{ "margin-left": "0px" }}>
        <h1> Welcome to Bailarn : Thai NLP Platform</h1>
        <h2> Overview of Bailarn </h2>
        <div class="row">
          <p style={{ "padding-left": "50px" }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This project
            aims to develop Thai NLP Library based on Deep Learning
            techniques. With this library, users can train the model on
            their own dataset using the provided deep learning model
            structure and utilities. Moreover, Thai NLP Library also
            provides pre-trained models to process Thai text instantly. All
            pre-trained models was evaluated and compared across various
            deep learning techniques proposed in the previous researches in
            the experiments.
          </p>
        </div>
        <h2> Features </h2>
        <div class="row">
          <div class="col-md-3">
            <p style={{ "padding-left": "50px" }}>
              <b>Tokenization</b>
              <br />
            </p>
          </div>
          <div>
            <p style={{ "padding-left": "50px" }}>
              &nbsp;&nbsp;&nbsp;&nbsp; Identify the boundaries between texts in natural languages to divide these texts into the meaningful unit as word.<br />
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <p style={{ "padding-left": "50px" }}>
              <b>Word Embedding</b>
              <br />
            </p>
          </div>
          <div>
            <p style={{ "padding-left": "50px" }}>
              &nbsp;&nbsp;&nbsp;&nbsp; Map a word from the vocabulary to vectors pf real numbers involving a mathematical embedding.<br />
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <p style={{ "padding-left": "50px" }}>
              <b>Named Entity Recognition</b>
              <br />
            </p>
          </div>
          <div>
            <p style={{ "padding-left": "50px" }}>
              &nbsp;&nbsp;&nbsp;&nbsp; Predict Named entity of each words in a sentence.<br />
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <p style={{ "padding-left": "50px" }}>
              <b>Part of Speech Tagging</b>
              <br />
            </p>
          </div>
          <div>
            <p style={{ "padding-left": "50px" }}>
              &nbsp;&nbsp;&nbsp;&nbsp; Predict Part-of-Speech of each words in a sentence.<br />
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <p style={{ "padding-left": "50px" }}>
              <b>Sentiment Analysis</b>
              <br />
            </p>
          </div>
          <div>
            <p style={{ "padding-left": "50px" }}>
              &nbsp;&nbsp;&nbsp;&nbsp; Predict the Sentiment of a document including Positive, Neutral and Negative sentiment.<br />
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <p style={{ "padding-left": "50px" }}>
              <b>Text Categorization</b>
              <br />
            </p>
          </div>
          <div>
            <p style={{ "padding-left": "50px" }}>
              &nbsp;&nbsp;&nbsp;&nbsp; Predict the pre-defined classes of sentences on the specific domain.<br />
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <p style={{ "padding-left": "50px" }}>
              <b>Keyword Expansion</b>
              <br />
            </p>
          </div>
          <div>
            <p style={{ "padding-left": "50px" }}>
              &nbsp;&nbsp;&nbsp;&nbsp; Find the related words from the vocabulary to the query word.<br />
            </p>
          </div>
        </div>

        <h2> Download Bailarn Library </h2>
        <div class="row" style={{ "padding-left": "50px" }}>
          <a href="https://github.com/KawinL/Thai_NLP_platform/">
            https://github.com/KawinL/Thai_NLP_platform/
          </a>
        </div>
        <h2> References </h2>
        <div class="row" style={{ "padding-left": "50px" }}>
          <p>
            C. Udomcharoenchaikit, P. Vateekul, and P. Boonkwan. “Thai
            Named-Entity Recognition Using Variational Long Short-Term
            Memory with Conditional Random Field” in proceedings of the
            Twelfh Series of Symposium on Natural Language Processing
            (SNLP), 2017.
          </p>
        </div>
        <div class="row" style={{ "padding-left": "50px" }}>
          <p>
            Huang, Z., Xu, W., & Yu, K. (2015). Bidirectional LSTM-CRF
            models for sequence tagging. arXiv preprint arXiv:1508.01991.
          </p>
        </div>
      </div>;
  }
}

export default (SentimentUI);
