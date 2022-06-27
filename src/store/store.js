import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      currentUser: {
        id: "g1",
        name: "Guest",
        surname: "",
        username: "unauthorized-guest",
      },
      loggedIn: false,
      allUsers: null,
      allPosts: null,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

export default store;
