const actions = {
  setFormStatus: ({ commit }, status) => {
    return commit('SET_FORMSTATUS', status)
  },
  setSid: ({ commit }, sid) => {
    return commit('SET_SID', sid)
  }
}

export default actions
