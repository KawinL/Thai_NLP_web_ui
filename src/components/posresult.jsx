import React, { Component } from "react";
import ReactTooltip from "react-tooltip";
import { posColor } from "./pos_color";

export default class PosResultUI extends Component{
    constructor(props){
        super(props)
        const description = {
          NN:"Non-proper nouns",
          NR:"Proper nouns",
          PPER:"Personal pronoun",
          PINT:"Interrogative pronouns in non-determiner usage",
          PDEM:"Demonstrative pronoun as heads",
          DPER:"Same list as PPER words, but modifying head nouns typically as possessives",
          DINT:"Items in PINT which are used as determiners to Nouns",
          DDEM:"The most common determiners, usually demonstratives",
          PDT:"Quantifier determiners, and pre-modifiers of quantifier spreceding classifier words",
          REFX:"Reflexive words",
          VV:"Main verbs in clauses, verb–form",
          VA:"Main adjective element in verb-less clauses",
          AUX:"Auxiliary verbs indicating modality/aspect/tense/passive etc.",
          JJA:"Adjective form words in noun modifying positions",
          JJV:"Verb form words directly modifying nouns in same noun phrase",
          ADV:"Adverbs modifying Verb/Adj/other adverbs",
          NEG:"Negative word",
          PAR:"Polite/question/emphasis particles usually in clause–end",
          CL:"Common noun that functions as classifier units, plus true classifiers",
          CD:"Numbers as cardinals, quantifiers",
          OD:"Numbers as ordinals, and non-quantifiers",
          FXN:"Noun-type prefix",
          FXG:"Group type prefix",
          FXAV:"Adverb type prefix",
          FXAJ:"Adjective type prefix",
          COMP:"Complementizers",
          CNJ:"Coordinators and clause conjunctions",
          P:"Prepositions",
          IJ:"Interjections",
          PU:"Regular and Thai - character punctuations",
          FWN:"Non-proper Noun word written in non-thai script",
          FWV:"Verb written in non-thai script",
          FWA:"Adjective written in non-thai script",
        } 
        const tagList = ["NN",
        "NR",
        "PPER",
        "PINT",
        "PDEM",
        "DPER",
        "DINT",
        "DDEM",
        "PDT",
        "REFX",
        "VV",
        "VA",
        "AUX",
        "JJA",
        "JJV",
        "ADV",
        "NEG",
        "PAR",
        "CL",
        "CD",
        "OD",
        "FXN",
        "FXG",
        "FXAV",
        "FXAJ",
        "COMP",
        "CNJ",
        "P",
        "IJ",
        "PU",
        "FWN",
        "FWV",
        "FWA",
        "FWX"];
        const colorList = ["rgba(145,213,110, 0.7)", "rgba(7,111,66, 0.7)", "rgba(201,200,244, 0.7)", "rgba(162,48,94, 0.7)", "rgba(163,29,153, 0.7)", "rgba(64,55,191, 0.7)", "rgba(173,223,15, 0.7)", "rgba(67,117,132, 0.7)", "rgba(9,98,79, 0.7)", "rgba(244,62,144, 0.7)", "rgba(130,168,28, 0.7)", "rgba(169,14,164, 0.7)", "rgba(86,27,166, 0.7)", "rgba(126,239,163, 0.7)", "rgba(49,119,21, 0.7)", "rgba(130,19,154, 0.7)", "rgba(163,27,16, 0.7)", "rgba(13,174,39, 0.7)", "rgba(132,93,254, 0.7)", "rgba(191,199,223, 0.7)", "rgba(218,98,6, 0.7)", "rgba(227,9,23, 0.7)", "rgba(34,170,235, 0.7)", "rgba(47,154,192, 0.7)", "rgba(37,239,237, 0.7)", "rgba(97,145,70, 0.7)", "rgba(199,57,53, 0.7)", "rgba(138,67,71, 0.7)", "rgba(89,31,183, 0.7)", "rgba(98,138,222, 0.7)", "rgba(101,24,205, 0.7)", "rgba(214,247,46, 0.7)", "rgba(149,112,247, 0.7)", "rgba(154,59,81, 0.7)", "rgba(66,202,6, 0.7)"];
        
        const selectedCheckboxes = new Set([' '])
        this.state={
            "NN":true,
            "NR":false,
            "PPER":false,
            "PINT":false,
            "PDEM":false,
            "DPER":false,
            "DINT":false,
            "DDEM":false,
            "PDT":false,
            "REFX":false,
            "VV":false,
            "VA":false,
            "AUX":false,
            "JJA":false,
            "JJV":false,
            "ADV":false,
            "NEG":false,
            "PAR":false,
            "CL":false,
            "CD":false,
            "OD":false,
            "FXN":false,
            "FXG":false,
            "FXAV":false,
            "FXAJ":false,
            "COMP":false,
            "CNJ":false,
            "P":false,
            "IJ":false,
            "PU":false,
            "FWN":false,
            "FWV":false,
            "FWA":false,
            "FWX":false,
            selectedCheckboxes,
            tagList,
            colorList,
            description,
            "toggleAll": false
        }
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
    }
    toggleAll(e){
      let { value } = e.target;
      console.log(e.target);
      if(value!=="Toggle All"){
        return 
      }
      value = !this.state.toggleAll
      console.log('all')
      let update = this.state
      for (let i = 0;i<this.state.tagList.length;i++){
        update[this.state.tagList[i]] = value;
      }
      console.log(update)
      this.setState(update);
      this.setState({toggleAll:value})
    }

    toggleCheckbox(e) {
        const { value } = e.target;
        console.log(e.target);
        let update = this.state
        update[value] = !this.state[value];
        console.log(this.state[value]);
        console.log(!(this.state[value]))
        this.setState(update);
        console.log(this.state)
    }

    highlightWord(word, tag){
        return (
            <span 
                style={{
                    backgroundColor: posColor[tag],
                    padding: "0 5px",
                    margin: "0"
                }}>
                {word}
            </span>
        )
    }

    normalWord(word){
        <span>{word}</span>
    }
    
    getWord(word,tag){
        if(this.state[tag]){
            return this.highlightWord(word, tag)
        }
        else return word
        
    }

    genPOSShow(){
        return <div style={{ lineHeight: "200%" }}>
            {this.props.pos.token_list.map((w, i) => (
              <span 
              data-tip={this.props.pos.tag_list[i]}>
                {this.getWord(w, this.props.pos.tag_list[i])}{" "}
              </span>
            ))} <ReactTooltip effect="solid" />
          </div>;
    }

    render(){
        return <div>
            <div class="card" style={{ width: "100%" }}>
              <div class="card-header">
                <div id="accordion">
                  <div class="card">
                    <div class="card-header" id="headingOne">
                      <h5 class="mb-0">
                        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Tag Filter
                        </button>
                      </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div class="card-body">
                        <div class="row container">
                          <div className="form-check form-check-inline col-2">
                            <input class="form-check-input" 
                            type="checkbox" 
                            id="inlineCheckbox1" 
                            checked={this.state["toggleAll"]} 
                            value="Toggle All" 
                            onClick={this.toggleAll} />
                            <label class="form-check-label rounded" for="inlineCheckbox1">
                              <b>SELECT ALL</b>
                            </label>
                          </div>
                          {this.state.tagList.map((e, index) => (
                            <div
                              className="form-check form-check-inline col-2"
                              data-tip={this.state.description[e]}
                            >
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox1"
                                checked={this.state[e]}
                                value={e}
                                onClick={this.toggleCheckbox}
                              />
                              <label
                                class="form-check-label rounded"
                                for="inlineCheckbox1"
                                style={{
                                  backgroundColor: this.state.colorList[
                                    index
                                  ]
                                }}
                              >
                                {e}
                              </label>
                            </div>
                          ))}
                          <ReactTooltip effect="solid" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <div>{this.genPOSShow()}</div>
                </li>
              </ul>
            </div>
          </div>;
    }
}