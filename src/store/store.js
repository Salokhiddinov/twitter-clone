import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      currentUser: {
        id: "ux",
        name: "Sobirjon",
        surname: "Salakhiddinov",
        username: "sobirjon",
      },
      allUsers: [],
      allPosts: [],
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

export default store;
