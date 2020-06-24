import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from './Footer';

import { playSong, pausedSong, setRandomMode, setLoopedMode } from './actions/playerActions'

import '../css/main.css'

import BackIcon from '../images/back_ico.svg'
import MoreIcon from '../images/more_ico.svg'
import ShuffleIcon from '../images/shuffle_ico.svg'
import RepeatIcon from '../images/repeat_ico.svg'
import PlayActive from '../images/Play_active.png'
import PlayInactive from '../images/Play_inactive.png'
import BrandLogo from '../images/usertive_logo.svg'


import SimpleSlider from './SimpleSlider';
import ProgressBarMusic from './ProgressBarMusic';

class Main extends Component {

  handlePlay = ()=>{
        this.props.playSong();
    }

  handlePaused = ()=>{
        this.props.pausedSong();
    }

  handleLooped = ()=>{
        this.props.setLoopedMode();
      }

  handleRandom= () => {
      this.props.setRandomMode();
}

  render() {

    let next_song = this.props.songs.find(song => song.id === this.props.next_Song);
    let prev_song =this.props.songs.find(song => song.id === (this.props.prev_Song));

    return(
      <div className="mainPage">
        <div className="top">
            <div className="topContent">
              <div className="mainHeader">
                  <Link to="/"><img className="backIcon" src={BackIcon} alt=""/></Link>
                  <div className="headerText">
                    <p className="album">ALBUM</p>
                    <p className="albumTitle">Unreleased</p>
                  </div>
                  <Link to="/more"><img className="moreIcon" src={MoreIcon} alt=""/></Link>
              </div>
            </div>
        </div>

        <div className="brandLogo">
          <img className="brandLogoImg" src={BrandLogo}/>
        </div>

        <div className="addicionalSliderImages">
          <img className="addPrevSong" src={prev_song.img}/>
          <img className="addNextSong" src={next_song.img}/>
        </div>


        <div className="slider">
            <SimpleSlider />
        </div>


        <div className="playbackButtons">
          <img onClick={this.handleRandom} className="shuffleIcon" src={ShuffleIcon} alt=""/>
          <img onClick={this.handleLooped} className="repeatIcon" src={RepeatIcon} alt=""/>
        </div>


        <div className="progessBar"><ProgressBarMusic/></div>
        <div className="fourier"></div>
        <Footer />

      </div>
    )
  }
}

const mapStateToProps = (state)=>{
    return{
      songStatus : state.songStatus,
      playMode : state.playMode,
      songs: state.songs,
      next_Song: state.nextSong,
      prev_Song: state.prevSong
    }
}

const mapDispatchToProps = (dispatch)=>{
  return{
      playSong: ()=>{dispatch(playSong())},
      pausedSong: ()=>{dispatch(pausedSong())},
      setLoopedMode: ()=>{dispatch(setLoopedMode())},
      setRandomMode: ()=>{dispatch(setRandomMode())},
  }
}


export default connect(mapStateToProps,mapDispatchToProps) (Main)
