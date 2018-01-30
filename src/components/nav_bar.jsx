import React, { Component } from "react";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light rounded clearfix z-depth-5">
            <a class="navbar-brand float-left" href="#">
              Thai NLP Platform
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon" />
            </button>

            <div class="collapse navbar-collapse float-right" id="navbarsExample09">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    Download
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    API
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </nav>
      );
  }
}

export default NavBar;
