import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      currentUser: {
        id: "u4",
        name: "Jeff",
        surname: "Bezos",
        username: "jeffbezos",
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
