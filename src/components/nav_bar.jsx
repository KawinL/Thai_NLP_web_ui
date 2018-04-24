import React, { Component } from "react";
import "./nav_bar.css";
import classNames from 'classnames';
import logo from "../images/logo.png"
import { Link } from "react-router-dom";

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
      return (
        <nav class="navbar navbar-default navbar-expand-lg navbar-dark text-white" style={{'background':'#545454'}}>
          <div class="row" style={{'padding-left': '5px'}}>
            <img src={logo} height="32" width="32"/>
              <div class="col-xs-6">
                <a class="navbar-brand" href="/home">
                  Bailarn Library
                </a>
                <a href="#menu-toggle" class="btn" style={{'background':'#545454','color':'#fff'}} id="menu-toggle">
                  <i class="fa fa-bars w3-large"></i> 
                </a>
              </div>
              <div class="col-xs-3" style={{"padding":"0"}}>
                  <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    More
                  </a>
              <div class="dropdown-menu right" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="https://github.com/KawinL/Thai_NLP_platform/">Download</a>
                <a class="dropdown-item" href="https://github.com/KawinL/Thai_NLP_platform/tree/master/docs">Documentation</a>
                <div class="dropdown-divider"></div>
                <Link to={"/about"} activeClassName={"active"} className={"dropdown-item"}>

                  <span class="pad-left">About Us</span>
                </Link>
              </div>
              </div>

          </div>
          <div class="text-white right" id = "nav-item-list" id="navbarButton">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/KawinL/Thai_NLP_platform/">
                  <i class="fa fa-cloud-download w3-large"></i>
                  <span class="pad-left">Download</span>
                </a>
              </li>

              <li className={classes} onClick={() => this.setAPIActive()} id="navbarButton">
                <a class="nav-link" href="https://github.com/KawinL/Thai_NLP_platform/tree/master/docs">
                  <i class="fa fa-book w3-large"></i>
                  <span class="pad-left">Documentation</span>
                  <span class="sr-only ">(current)</span>
                </a>
              </li>


              <li className={classes2} onClick={() => this.setAboutActive()} id="navbarButton">
                <Link to={"/about"} activeClassName={"active"} className={"nav-link"}>

                  <i class="fa fa-comments w3-large"></i>

                  <span class="pad-left">About Us</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      );
  }
}

export default NavBar;
