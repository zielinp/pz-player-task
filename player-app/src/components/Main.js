import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import '../css/main.css'

class Main extends Component {
  render() {
    return(
      <div className="container">Main
        <div className="top"></div>
        <div className="slider"></div>
        <div className="playbackButtons"></div>
        <div className="progessBar"></div>
      </div>
    )
  }
}


export default Main
