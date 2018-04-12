import React, { Component } from "react";

export default class Menu extends Component{

    generateSubMenu(){
        let subMenu = []
        subMenu.push(<div class="w3-bar w3-block w3-padding-large">
            <span style={{'font-weight':'500'}}>
            <i class="fa fa-wrench w3-large" style={{'padding-right':'10px'}}></i> 
            {this.props.head} 
            </span>
            </div>);
        for (let i in this.props.detail) {
            subMenu.push(<a class="w3-btn w3-block w3-hover-teal w3-padding-large c1" href={this.props.detail[i]}> {i} </a>);
        }
        return subMenu;
    }


    render(){
      return(//<a href="#" data-activates="slide-out" class="btn btn-primary p-3 button-collapse"><i class="fa fa-bars"></i></a>

    <div class="c1" style={{width : '100%'}}> 
        {this.generateSubMenu()}
    </div>);
    }

}