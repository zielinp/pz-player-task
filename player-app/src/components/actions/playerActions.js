import { SHUFFLE_SONG,PLAY_SONG,PAUSED_SONG, NEXT_SONG, PREV_SONG } from './action-types/player-actions.js'

export const shuffleSong = (id) => {
  return {
    type: SHUFFLE_SONG,
    id
  }
}

export const playSong = (id) => {
  return {
    type: PLAY_SONG,
    id
  }
}

export const pausedSong = (id) => {
  return {
    type: PAUSED_SONG,
    id
  }
}

export const nextSong = (id) => {
  return {
    type: NEXT_SONG,
    id
  }
}

export const prevSong = (id) => {
  return {
    type: PREV_SONG,
    id
  }
}
