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

// function PrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//       <img className="prevIconArrow" src={PrevIcon} alt=""
//           onClick={onClick}/>
//   );
// }




// const mapStateToProps = (state)=>{
//     return{
//         songs: state.songs,
//         actualSong: state.actualSong,
//         next_Song: state.nextSong
//     }
// }

// const mapDispatchToProps = (dispatch)=>{
//   return{
//       prevSong: ()=>{dispatch(prevSong())},
//       nextSong: ()=>{dispatch(nextSong())}
//   }
// }
//
// export default connect(mapStateToProps,mapDispatchToProps)(SimpleSlider)
