import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from './Footer';

import BackIcon from '../images/back_ico.svg'
import MoreIcon from '../images/more_ico.svg'

import '../css/more.css'

class More extends Component {
  render() {

    let actual_song = this.props.songs.find(song => song.id === this.props.actualSong);


    return(
      <div>
      <div className="morePage">
        <div className="moreHeader">
            <Link to="/"><img className="backIcon" src={BackIcon} alt=""/></Link>
            <div className="headerText">
              <p className="album">ALBUM</p>
              <p className="albumTitle">Unreleased</p>
            </div>
            <Link to="/more"><img className="moreIcon" src={MoreIcon} alt=""/></Link>
        </div>

        <div className="morePageContent">

          <div className="moreSongInfo">
              <img className="moreSongInfoImg" src={actual_song.img}/>
            <div>
              <p className="songSlideTitle">{actual_song.title}</p>
              <p className="songSlideAuthor">{actual_song.author}</p>
            </div>

          </div>


          <div className="morePageContentLinks">
            <p>. . .</p>
            <p>Add to playlist</p>
            <p>Show album</p>
            <p>Share with friends</p>
          </div>
        </div>


      </div>


        <Footer />
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


export default connect(mapStateToProps)(More)
