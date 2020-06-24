import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import { secondsToMinutes } from './Playlist.js'

import { connect } from 'react-redux'

import '../css/footer.css'

import PlaylistIcon from '../images/playlist_ico.svg'



class Footer extends Component {
  render() {

    let next_song = this.props.songs.find(song => song.id === this.props.nextSong)

    return(
      <div className="footer">

      <div className="icon"><Link to="/playlist"><img className="playlistIcon" src={PlaylistIcon} alt=""/></Link></div>
      <div className="nextSongInfo">
          <div className="next">NEXT</div>
          <div className="songInfo">
            <span className="nextSong">{next_song.title}</span>
            <span className="dotsFooter"></span>
            <span className="time">{secondsToMinutes(next_song.time)}</span>
          </div>
      </div>
    </div>

  )
}
}

const mapStateToProps = (state)=>{
    return{
        songs: state.songs,
        nextSong: state.nextSong
    }
  }

export default connect(mapStateToProps)(Footer)
