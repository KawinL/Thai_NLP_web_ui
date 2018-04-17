import React, { Component } from "react";
import "./nav_bar.css";
import classNames from 'classnames';


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
          
          <a class="navbar-brand">
          <i class="fa fa-leaf w3-large d-inline-block align-top" style={{'color':'#2BD1A3'}}></i> 
          Bailarn Library</a>

          <div class="collapse navbar-collapse float-right text-white " id="navbarsExample09">
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
                  <span class="pad-left">API</span>
                  <span class="sr-only ">(current)</span>
                </a>
              </li>
              

              <li className={classes2} onClick={() => this.setAboutActive()}>
                <a class="nav-link" href="/about">
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
