import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Menu extends Component{

    generateSubMenu(){
      let subMenu = []
      for (let i in this.props.detail) {
        subMenu.push(<Link to={this.props.detail[i]}>
            <li class="list-group-item list-group-item-action border-bottom-0">
              {i}
            </li>
          </Link>);
      }
      return subMenu;
    }

    render(){
      return (
        <div class="card" style={{ width: "18rem" }}>
          <div class="card-header text-success border-info">
            {this.props.head}
          </div>
          <ul class="list-group list-group-flush">
            {this.generateSubMenu()}
          </ul>
        </div>
        )
        
    }
}