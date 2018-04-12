import React, { Component } from "react";
import "./style.css";


class NavBar extends Component {
  render() {
      return <nav class="navbar navbar-expand-lg navbar-dark text-white justify-content-between" style={{'background':'#545454'}}>
          
          <a class="navbar-brand">
          <i class="fa fa-leaf w3-large d-inline-block align-top" style={{'color':'#2BD1A3', 'padding-right':'20px'}}></i> 
          Bailarn Library</a>

          <div class="collapse navbar-collapse float-right text-white " id="navbarsExample09">
            <ul class="navbar-nav mr-auto ">
              
              <li class="nav-item">
                <a class="nav-link">
                  <i class="fa fa-cloud-download w3-large"></i> 
                  <span class="pad-left">Download</span>
                </a>
              </li>
              
              <li class="nav-item">
                <a class="nav-link">
                  <i class="fa fa-book w3-large"></i> 
                  <span class="pad-left">API</span>
                  <span class="sr-only ">(current)</span>
                </a>
              </li>
              

              <li class="nav-item">
                <a class="nav-link">
                  <i class="fa fa-comments w3-large"></i> 

                  <span class="pad-left">About</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>;
  }
}

export default NavBar;
