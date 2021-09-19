import { createStore } from "vuex";
import { GlobalDataProps } from "./model/type";
import { testData, testPosts } from "./testData";

const store = createStore<GlobalDataProps>({
  state: {
    user: { isLogin: false },
    columns: testData,
    posts: testPosts
  },
  mutations: {
    login(state, payload) {
      console.log(payload);
      state.user = { ...state.user, isLogin: true, name: payload.name };
    }
  }
});

export default store;
