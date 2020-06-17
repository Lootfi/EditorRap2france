/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  SET_ARTISTS (state, artists) {
    state.artists = artists
  },
  REMOVE_RECORD (state, itemId) {
    const ArtistIndex = state.artists.findIndex((u) => u.slug === itemId)
    state.artists.splice(ArtistIndex, 1)
  }
}
