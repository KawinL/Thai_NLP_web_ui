import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component{

    generateSubMenu(){
      let subMenu = []
      for (let i in this.props.detail) {
        subMenu.push(<Link to={this.props.detail[i]}>
            <li class="list-group-item list-group-item-action c1 text-white" >
              {i}
            </li>
          </Link>);
      }
      return subMenu;
    }

    render(){
      return (
        <div class="card c1 " style={{ width: "100%" }}>
          <div class="card-header text-white border-info" style={{fontWeight: 700}}>
            {this.props.head}
          </div>
          <ul class="list-group list-group-flush">
            {this.generateSubMenu()}
          </ul>
        </div>
        )
        
    }
}