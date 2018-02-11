import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../index.css'

export default class Menu extends Component{

//     generateSubMenu(){
//       let subMenu = []
//       for (let i in this.props.detail) {
//         subMenu.push(<Link to={this.props.detail[i]}>
//             <li class="list-group-item list-group-item-action border-bottom-0">
//               {i}
//             </li>
//           </Link>);
//       }
//       return subMenu;
//     }

//     render(){
//       return (
//         <div class="card bg-dark" style={{ width: "100%" }}>
//           <div class="card-header text-white">
//             {this.props.head}
//           </div>
//           <ul class="list-group">
//             {this.generateSubMenu()}
//           </ul>
//         </div>
//         )
        
//     }
// }

    render(){
      if(this.props.head == 'Foundation'){
      return (
        <div class="card" style={{ width: "100%" }}>
          <div class="card-header text-white c1">
            Foundation
          </div>
          <ul class="list-group">
              <li class="list-group-item list-group-item-action border-bottom-0"><a class="text-dark" href="#">Tokenizer</a></li>
              <li class="list-group-item list-group-item-action border-bottom-0"><a class="text-dark" href="#">Word Embedder</a></li>
              <li class="list-group-item list-group-item-action border-bottom-0"><a class="text-dark" href="#">Name Entity Recognizer</a></li>
              <li class="list-group-item list-group-item-action border-bottom-0"><a class="text-dark" href="#">Part of Speech Tagger</a></li>
          </ul>
        </div>
        )
    }
    else{
      return (
        <div class="card" style={{ width: "100%" }}>
          <div class="card-header text-white c1">
            Application
          </div>
          <ul class="list-group">
              <li class="list-group-item list-group-item-action border-bottom-0"><a class="text-dark" href="#">Sentiment Analysis</a></li>
              <li class="list-group-item list-group-item-action border-bottom-0"><a class="text-dark" href="#">Information Extraction</a></li>
              <li class="list-group-item list-group-item-action border-bottom-0"><a class="text-dark" href="#">Keyword Expansion</a></li>
          </ul>
        </div>
        )
    }
        
    }
}