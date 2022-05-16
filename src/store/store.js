import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        count: 50
      }
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  })
  
export default store;