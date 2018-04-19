import React, { Component } from "react";
import "./nav_bar.css";
import classNames from 'classnames';
import logo from "../images/logo.png"

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {active_api: false,
                  active_about: false};
    this.setState= this.setState.bind(this);
  }

  setAPIActive(){
    this.setState({ active_api: true,
                    active_about: false})
  }
  setAboutActive(){
    this.setState({ active_api: false,
                    active_about: true})
  }
  render() {
        const classes = classNames({
        "nav-item":true,
        active: this.state.active_api, // only add this class if the state says so
        });
        const classes2 = classNames({
        "nav-item":true,
        active: this.state.active_about, // only add this class if the state says so
        });
      return <nav class="navbar navbar-expand-lg navbar-dark text-white justify-content-between" style={{'background':'#545454'}}>
          <div style={{'padding-left': '5px'}}>
          <img src={logo} height="32" width="32"/>
          <a class="navbar-brand" href="/home">
          Bailarn Library
          </a>
          </div>
          <div class="collapse navbar-collapse text-white right">
            <ul class="navbar-nav mr-auto ">
              
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/KawinL/Thai_NLP_platform/">
                  <i class="fa fa-cloud-download w3-large"></i> 
                  <span class="pad-left">Download</span>
                </a>
              </li>
              
              <li className={classes} onClick={() => this.setAPIActive()}>
                <a class="nav-link">
                  <i class="fa fa-book w3-large"></i> 
                  <span class="pad-left">Documentation</span>
                  <span class="sr-only ">(current)</span>
                </a>
              </li>
              

              <li className={classes2} onClick={() => this.setAboutActive()}>
                <a class="nav-link" href="/about">
                  <i class="fa fa-comments w3-large"></i> 

                  <span class="pad-left">About Us</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>;
  }
}

export default NavBar;
