import React, {Component} from 'react';
import Slider from "react-slick";

import { connect } from 'react-redux'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextIcon from '../images/next_ico.svg'
import PrevIcon from '../images/previous_ico.svg'

import '../css/slider.css'

import { nextSong, prevSong } from './actions/playerActions'



function PrevArrow(props) {
  const { className, style, onClick } = props;
  const handlePrev = ()=>props.dispatch(prevSong());
  return (
  <img className="prevIconArrow" src={PrevIcon} alt=""
      onClick={handlePrev}/>
  );
}

export default connect()(PrevArrow)
