import React, {Component} from 'react';
import Slider from "react-slick";

import { connect } from 'react-redux'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextIcon from '../images/next_ico.svg'
import PrevIcon from '../images/previous_ico.svg'

import '../css/slider.css'

import { nextSong, prevSong } from './actions/playerActions'

import NextArrow from './NextArrow'
import PrevArrow from './PrevArrow'



class SimpleSlider extends React.Component {



  render() {

    let actual_song = this.props.songs.find(song => song.id === this.props.actualSong);
    let next_song = this.props.songs.find(song => song.id === this.props.next_Song);
    let prev_song =this.props.songs.find(song => song.id === (this.props.prev_Song));
    var settings = {
      dots: false,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // centerPadding: "150px",
      // centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
    };

    return (
      <div>
      <Slider {...settings}>
        <div>
          <img className="slides" src={actual_song.img}/>
        </div>
        <div>
          <img className="slides" src={next_song.img}/>
        </div>
        <div>
          <img className="slides" src={prev_song.img}/>
        </div>

      </Slider>
        <div>
          <p className="songSlideTitle">{actual_song.title}</p>
          <p className="songSlideAuthor">{actual_song.author}</p>
        </div>
        </div>
    );
  }
}


const mapStateToProps = (state)=>{
    return{
        songs: state.songs,
        actualSong: state.actualSong,
        next_Song: state.nextSong,
        prev_Song: state.prevSong
    }
}

const mapDispatchToProps = (dispatch)=>{
  return{
      prevSong: ()=>{dispatch(prevSong())},
      nextSong: ()=>{dispatch(nextSong())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SimpleSlider)
