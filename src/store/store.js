import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      currentUser: {
        id: "u1",
        name: "Nomonjon",
        surname: "Salokhiddinov",
        username: "nomonjon",
        password: "123456",
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
