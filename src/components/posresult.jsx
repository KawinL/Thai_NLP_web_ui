import React, { Component } from "react";
import ReactTooltip from "react-tooltip";

export default class PosResultUI extends Component{
    constructor(props){
        super(props)
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
        console.log('hula')
        this.state={
            "NN":false,
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
            colorList
        }
        this.toggleCheckbox = this.toggleCheckbox.bind(this);
    }

    getColorFromPos(pos){
        const mapper = {'ADV': 'rgba(130,19,154, 0.7)',
 'AUX': 'rgba(86,27,166, 0.7)',
 'CD': 'rgba(191,199,223, 0.7)',
 'CL': 'rgba(132,93,254, 0.7)',
 'CNJ': 'rgba(199,57,53, 0.7)',
 'COMP': 'rgba(97,145,70, 0.7)',
 'DDEM': 'rgba(67,117,132, 0.7)',
 'DINT': 'rgba(173,223,15, 0.7)',
 'DPER': 'rgba(64,55,191, 0.7)',
 'FWA': 'rgba(149,112,247, 0.7)',
 'FWN': 'rgba(101,24,205, 0.7)',
 'FWV': 'rgba(214,247,46, 0.7)',
 'FWX': 'rgba(154,59,81, 0.7)',
 'FXAJ': 'rgba(37,239,237, 0.7)',
 'FXAV': 'rgba(47,154,192, 0.7)',
 'FXG': 'rgba(34,170,235, 0.7)',
 'FXN': 'rgba(227,9,23, 0.7)',
 'IJ': 'rgba(89,31,183, 0.7)',
 'JJA': 'rgba(126,239,163, 0.7)',
 'JJV': 'rgba(49,119,21, 0.7)',
 'NEG': 'rgba(163,27,16, 0.7)',
 'NN': 'rgba(145,213,110, 0.7)',
 'NR': 'rgba(7,111,66, 0.7)',
 'OD': 'rgba(218,98,6, 0.7)',
 'P': 'rgba(138,67,71, 0.7)',
 'PAR': 'rgba(13,174,39, 0.7)',
 'PDEM': 'rgba(163,29,153, 0.7)',
 'PDT': 'rgba(9,98,79, 0.7)',
 'PINT': 'rgba(162,48,94, 0.7)',
 'PPER': 'rgba(201,200,244, 0.7)',
 'PU': 'rgba(98,138,222, 0.7)',
 'REFX': 'rgba(244,62,144, 0.7)',
 'VA': 'rgba(169,14,164, 0.7)',
 'VV': 'rgba(130,168,28, 0.7)'}
 return mapper[pos];
    }

    toggleCheckbox(e) {
        const { value } = e.target;
        console.log(value)
        let update = this.state
        update[value] = !this.state[value];
        console.log(this.state[value]);
        console.log(!(this.state[value]))
        this.setState(update);
        console.log(this.state)
    }

    highlightWord(word, tag){
        return<span style={{backgroundColor:this.getColorFromPos(tag)}}>
            {word}
        </span>
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
              <span data-tip={this.props.pos.tag_list[i]}>
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
                          Tag selection
                        </button>
                      </h5>
                    </div>

                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div class="card-body">
                        <div class="row container">
                          {this.state.tagList.map((e, index) => (
                            <div className="form-check form-check-inline col-2">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                id="inlineCheckbox1"
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    <div>
                        {this.genPOSShow()}
                    </div>
                </li>
              </ul>
            </div>
          </div>;
    }
}