/*=========================================================================================
  File Name: moduleCalendarMutations.js
  Description: Calendar Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default {
  SET_USERS (state, users) {
    state.users = users
  },
  REMOVE_ITEM (state, userSlug) {
    const ItemIndex = state.users.findIndex((p) => p.slug === userSlug)
    state.users.splice(ItemIndex, 1)
  }
}
