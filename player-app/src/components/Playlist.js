import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import BackIcon from '../images/back_ico.svg'
import HideIcon from '../images/hide_ico.svg'
import PlayInactive from '../images/Play_inactive.png'
import PlayActive from '../images/Play_active.png'

import { shuffleSong } from './actions/playerActions'

import '../css/playlist.css'



 export function secondsToMinutes(time){
  let minutes = Math.floor(time/60);
  let seconds = time - minutes * 60;
  let result = `${minutes}:${seconds}`
  if(seconds<10){
    result = `${minutes}:0${seconds}`
  }
  return result
}




class Playlist extends Component {

  handleShuffle = ()=>{
        this.props.shuffleSong();
    }


  render() {

    let actual_song = this.props.songs.find(song => song.id === this.props.actualSong);


  let songs = this.props.songs.map(song => {
    return(
      <li className="songsListElement" key={song.id}>

        <span>
        <span  className="songNumber">{song.id}.</span><span>{song.title}</span>
        </span>
        <span className="dots"></span>
        <span className="right">{secondsToMinutes(song.time)}</span>
      </li>
    )
  })

    return(
      <div className="container">

        <div className="header">
          <div className="headerContent container">

            <div className="headerLeft">
              <Link to="/pz-player-task"><img className="backIcon" src={BackIcon} alt=""/></Link>
            <div className="headerLeftText">
              <p className="title">{actual_song.title}</p>
              <p className="author">{actual_song.author}</p>
            </div>

            </div>
            <div className="headerRight">
              <img className="playIconPlaylist" src={PlayActive} alt=""/>
            </div>
          </div>
        </div>

        <div className="songsList">
          {songs}
        </div>


          <div className="bottom container">
            <Link to="/pz-player-task"><button className="shuffleButton" onClick={()=>{this.handleShuffle()}}>SHUFFLE PLAY</button></Link>
            <Link to="/pz-player-task"><img className="hideIcon" src={HideIcon} alt=""/></Link>
          </div>

      </div>

  )
  }

  }
  const mapStateToProps = (state)=>{
      return{
          songs: state.songs,
          actualSong: state.actualSong,
      }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        shuffleSong: ()=>{dispatch(shuffleSong())},

    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Playlist)
