export const state = () => ({
    logged : false ,
    token : null ,
    refresh : null ,
    role : ''
  })

export const mutations = {
    login (state, tokens) {
      state.logged = true ;
      state.token = tokens.token ;
      state.refresh = tokens.refreshToken ;
      state.role = tokens.role == 1 ? 'client' : 'freelancer' ;
    },
    setRole( state , role ) {
      state.role = role ?  'client' : 'freelancer' ;
    },
    logout (state) {
       state.logged = false ;
       state.token = null ;
       state.refresh = null ;
       state.role = ''
    },
    getToken (state) {
      return state.token
    } ,
    isLoged (state) {
        return state.logged
    }
  }