const login = {
  state: {
    formStatus: 0,
    sid: ''
  },
  mutations: {
    SET_FORMSTATUS: (state, status) => {
      state.formStatus = status
    },
    SET_SID: (state, sid) => {
      state.sid = sid
    }
  },
  actions: {

  }
}

export default login
