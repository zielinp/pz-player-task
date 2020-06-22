const initState={
  songs:[
    {id:1, title:"Livin'In A Movie", author:"Kayne West", time:207},
    {id:2, title:"Dark Fantasy", author:"Kayne West", time:312},
    {id:3, title:"All of the Lights", author:"Kayne West", time:174},
    {id:4, title:"So Appalled", author:"Kayne West", time:231},
    {id:5, title:"Devil in a New Dress", author:"Kayne West", time:291},
    {id:6, title:"Runaway", author:"Kayne West", time:226},
    {id:7, title:"Hell od a Life", author:"Kayne West", time:189},
    {id:8, title:"Blame Game", author:"Kayne West", time:422},
    {id:9, title:"Lost in the World", author:"Kayne West", time:217},
    {id:10, title:"Who Will Survive in America", author:"Kayne West", time:191},
    {id:11, title:"Dark Fantasy", author:"Kayne West", time:231},
  ],
  actualSong : [],
  nextSong : [],
  songStatus : [],
  playMode : []
}

const playerReducer = (state = initState, action) =>{
  return state;
}

export default playerReducer;
