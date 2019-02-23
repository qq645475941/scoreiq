// eslint-disable-next-line no-unused-vars
import api from '../../share/api/api'

// initial state
const state = {
  breadcrumb: '',
}
// getters
const getters = {

}
// actions
const actions = {

}
// mutations
const mutations = {
  setBreadcrumb(state,data) {
    state.breadcrumb = data;
  }
}
export default {
  state,
  getters,
  actions,
  mutations
}