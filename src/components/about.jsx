import React, { Component } from "react";

import { vectorizeWord } from "../action/index";
import ResultUI from "./result";
import ExplainUI from "./explanation";
import InputUI, { typeOfInputValue } from "./input";
import ExampleUI from "./example";
import DropdownUI from "./dropdown";

import lab_logo from "../images/datamind.png"
import cpcu_logo from "../images/cpcu.png"

class SentimentUI extends Component {

  render() {
    return (<div class="container">
        <h1> About Bailarn Library </h1>
        <h2> Project developers </h2>
	        <div class="row">
	        	<div class = "col-md-4">
			        <p><b>Ammarin Jetthakun</b><br />
			        <i>Department of Computer Engineering,<br />
			        Chulalongkorn University</i></p>
			    </div>
			    <div class = "col-md-4">
			        <p><b>Chavisa Thamjarat</b><br />
			        <i>Department of Computer Engineering,<br />
			        Chulalongkorn University</i></p>
			    </div>
			    <div class = "col-md-4">
			        <p><b>Kawin Liaowongphuthorn</b><br />
			        <i>Department of Computer Engineering,<br />
			        Chulalongkorn University</i></p>
			    </div>
	        </div>
        <h2> Advisors </h2>
	        <div class="row">
	        	<div class = "col-md-4">
			        <p><b>Asst. Prof. Peerapon Vateekul, Ph.D.</b><br />
			        <i>Department of Computer Engineering,<br />
			        Chulalongkorn University</i></p>
			    </div>
			    <div class = "col-md-4">
			        <p><b>Can Udomcharoenchaikit</b><br />
			        <i>Department of Computer Engineering,<br />
			        Chulalongkorn University</i></p>
			    </div>
			    <div class = "col-md-4">
			        <p><b>Prachya Boonkwan, Ph.D.</b><br />
			        <i>Language and Semantic Technology Lab (LST),<br />
			        NECTEC </i></p>
			    </div>
	        </div>
        <h2> Organizations </h2>
        <div class="row">
        	<div class = "col-md-4">
        		<img src = {lab_logo} height="80" width="250"/>
        	</div>
        	<div class = "col-md-4">
        		<img src = {cpcu_logo} height="80" width="500"/>
        	</div>
        </div>
    </div>)
  }
}

export default (SentimentUI);
