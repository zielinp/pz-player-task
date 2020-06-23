import React, {Component} from 'react';
import { connect } from 'react-redux'
import Timer from 'react-compound-timer'

import '../css/progress.css'

import { playSong, pausedSong,nextSong } from './actions/playerActions'

import { secondsToMinutes } from './Playlist.js'

import PlayActive from '../images/Play_active.png'
import PlayInactive from '../images/Play_inactive.png'


class ProgressBarMusic extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      time: this.props.actualTime,
      isOn:false,
      start:0
    }


    this.startTimer = this.startTimer.bind(this)
    this.stopTimer = this.stopTimer.bind(this)
    this.resetTimer = this.resetTimer.bind(this)
  }


  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })

    this.timer = setInterval(() => this.setState({

      time: Date.now() - this.state.start
    }), 1000);
  }
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }
  resetTimer() {
    this.setState({time: 0, isOn: false})
  }


  handlePlay = () => {
    this.props.playSong();
  }

  handlePaused = () => {
    this.props.pausedSong();
  }
  handleNext = () => {
    this.props.nextSong();
  }


  render() {


    let actual_song = this.props.songs.find(song => song.id === this.props.actualSong)


    let start = (this.state.time == 0 || !this.state.isOn) ?
      <button className="playPauseIcon" onClick={this.startTimer}>
        <img className="playIconImg" src={PlayActive} alt=""/>
      </button> : null

      let stop = (this.state.time == 0 || !this.state.isOn) ? null :
      <button className="playPauseIcon" onClick={this.stopTimer}>
        <img className="pauseIconImg" src={PlayInactive} alt=""/>
      </button>
      // let resume = (this.state.time == 0 || this.state.isOn) ?
      // null :
      // <button onClick={this.startTimer}>resume</button>
      // let reset = (this.state.time == 0 || this.state.isOn) ?
      // null :
      // <button onClick={this.resetTimer}>reset</button>



     var zmienna =Math.floor((this.state.time)/1000);

//      if(zmienna ===3 ){
// this.resetTimer();
//        zmienna=0;
//
//
//        this.handleNext();
//
//
//
//
//      }
    return (
        <div className = "timeProgressBar">

        <div>{start}{stop}</div>


        <div className="timeProgress">
        <div className="leftTime">{secondsToMinutes(actual_song.time-zmienna)}</div>
        <ProgressBar zmienna={(zmienna/actual_song.time)*100} />
        <div className="fullTime">{secondsToMinutes(actual_song.time)}</div>
        </div>

      </div>
    )
  }
}

const ProgressBar = (props) => {
  return (
      <div className="progress-bar">
        <Filler zmienna={props.zmienna} />
      </div>
    )
}

const Filler = (props) => {
  return <div className="filler" style={{ width: `${props.zmienna}%` }} />
}

const mapStateToProps = (state)=>{
    return{
      songs: state.songs,
      actualSong: state.actualSong,
      songStatus : state.songStatus,
      actualTime: state.actualTime,

    }
}

const mapDispatchToProps = (dispatch)=>{
  return{
      playSong: ()=>{dispatch(playSong())},
      pausedSong: ()=>{dispatch(pausedSong())},
      nextSong: ()=>{dispatch(nextSong())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProgressBarMusic)
