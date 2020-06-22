import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import BackIcon from '../images/back_ico.svg'
import HideIcon from '../images/hide_ico.svg'
import PlayInactive from '../images/Play_inactive.png'
import PlayActive from '../images/Play_active.png'


import '../css/playlist.css'



function secondsToMinutes(time){
  let minutes = Math.floor(time/60);
  let seconds = time - minutes * 60;
  let result = `${minutes}:${seconds}`
  if(seconds<10){
    result = `${minutes}:0${seconds}`
  }
  return result
}




class Playlist extends Component {
  render() {

  let songs = this.props.songs.map(song => {
    return(
      <li className="songsListElement container" key={song.id}>

        <span>
        <span  className="songNumber">{song.id}.</span><span>{song.title}</span>
        </span>

        <span className="right">{secondsToMinutes(song.time)}</span>
      </li>
    )
  })

    return(
      <div className="container">

        <div className="header">
          <div className="headerContent container">

            <div className="headerLeft">
              <Link to="/main"><img className="backIcon" src={BackIcon} alt=""/></Link>
            <div className="headerLeftText">
              <p className="title">Self Conscious</p>
              <p className="author">Kayne West</p>
            </div>

            </div>
            <div className="headerRight">
              <img className="playIcon" src={PlayActive} alt=""/>
            </div>
          </div>
        </div>

        <div className="songsList">
          {songs}
        </div>


          <div className="bottom container">
            <button className="shuffleButton">SHUFFLE PLAY</button>
            <Link to="/main"><img className="hideIcon" src={HideIcon} alt=""/></Link>
          </div>

      </div>

  )
  }

  }
  const mapStateToProps = (state)=>{
      return{
          songs: state.songs
      }

}


export default connect(mapStateToProps)(Playlist)