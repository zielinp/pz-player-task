import Album1 from '../../images/unreleased_cover.png'
import Album2 from '../../images/cover.png'
import Album3 from '../../images/cover-1.png'
import { SHUFFLE_SONG,PLAY_SONG,PAUSED_SONG, NEXT_SONG, PREV_SONG } from '../actions/action-types/player-actions'


const initState={
  songs:[
    {id:1, title:"Livin'In A Movie", author:"Kayne West", time:207, img:Album1},
    {id:2, title:"Dark Fantasy", author:"Kayne West", time:312,img:Album2},
    {id:3, title:"All of the Lights", author:"Kayne West", time:174,img:Album3},
    {id:4, title:"So Appalled", author:"Kayne West", time:231,img:Album1},
    {id:5, title:"Devil in a New Dress", author:"Kayne West", time:291,img:Album2},
    {id:6, title:"Runaway", author:"Kayne West", time:226,img:Album3},
    {id:7, title:"Hell of a Life", author:"Kayne West", time:189,img:Album1},
    {id:8, title:"Blame Game", author:"Kayne West", time:422,img:Album2},
    {id:9, title:"Lost in the World", author:"Kayne West", time:217,img:Album3},
    {id:10, title:"Who Will Survive in America", author:"Kayne West", time:191,img:Album1},
    {id:11, title:"Dark Fantasy", author:"Kayne West", time:231,img:Album2},
  ],
  actualSong : 1,
  nextSong : 2,
  prevSong : 11,
  actualTime:0,
  songStatus : [],
  playMode : [],

}

const playerReducer = (state = initState, action) =>{

  if(action.type === SHUFFLE_SONG){

    let rand_song_id = Math.floor(Math.random() * 11) + 1;
    let next_song_id = rand_song_id+1;

    if(rand_song_id == 11){
       next_song_id = 1
    }

    return{
      ...state,
      prevSong: state.actualSong,
      actualSong: rand_song_id,
      nextSong: next_song_id,

            }
  }

  if(action.type === PLAY_SONG){}
  if(action.type === PAUSED_SONG){}

  if(action.type === NEXT_SONG){

    let temp_nextSong = state.nextSong+1;
    if(temp_nextSong > 11){
      temp_nextSong = 1;
    }

    return{
      ...state,
      prevSong: state.actualSong,
      actualSong: state.nextSong,
      nextSong: temp_nextSong,

            }
  }

  if(action.type === PREV_SONG){
    let temp_prevSong = state.prevSong-1;
    if(temp_prevSong < 1){
      temp_prevSong = 11;
    }

    return{
      ...state,
      prevSong: temp_prevSong,
      actualSong: state.prevSong,
      nextSong: state.actualSong,
            }
  }
  return state;
}

export default playerReducer;
