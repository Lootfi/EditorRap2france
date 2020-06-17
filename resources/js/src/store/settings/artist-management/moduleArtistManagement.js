/*=========================================================================================
  File Name: moduleArtistManagement.js
  Description: Calendar Module
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import state from './moduleArtistManagementState.js'
import mutations from './moduleArtistManagementMutations.js'
import actions from './moduleArtistManagementActions.js'
import getters from './moduleArtistManagementGetters.js'

export default { 
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}

