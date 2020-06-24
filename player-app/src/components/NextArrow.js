import React, {Component} from 'react';
import Slider from "react-slick";

import { connect } from 'react-redux'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NextIcon from '../images/next_ico.svg'
import PrevIcon from '../images/previous_ico.svg'

import '../css/slider.css'

import { nextSong, prevSong } from './actions/playerActions'

function NextArrow(props) {
  const { className, style, onClick } = props;
  const handleNext = ()=>props.dispatch(nextSong());
  return (
  <img className="nextIconArrow" src={NextIcon} alt=""
      onClick={handleNext}/>
  );
}

export default connect()(NextArrow)
