import React, { Component } from "react";

export default class Menu extends Component{

    generateSubMenu(idx){
        let subMenu = []
        subMenu.push(<li class="sidebar-brand" style={{"width":"100%"}}>
                        <span class ="text-white">
                            
                                {this.props.head[idx]} 
                            <i class="fa fa-wrench w3-large"></i> 
                        </span>
                    </li>);
        for (let i in this.props.detail[idx]) {
            subMenu.push(<li class="active focus" style={{"width":"100%"}}><a  href={this.props.detail[idx][i]}> {i} </a></li>);
        }
        return subMenu;
    }


    render(){
      return(//<a href="#" data-activates="slide-out" class="btn btn-primary p-3 button-collapse"><i class="fa fa-bars"></i></a>

    <div id="sidebar-wrapper" class="col-xs-4 col-md-2" style={{"padding": "0px"}} >
        <ul class="sidebar-nav nav nav-tabs" id="sidebar-nav" style={{"display":"flex","width":"100%"}}>
            {this.generateSubMenu(0)}
            {this.generateSubMenu(1)}
        </ul>
    </div>);
    }

}