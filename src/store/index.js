import { createStore } from "vuex";
import auth from "./modules/auth";
import user from "./modules/user";
import axios from "axios";

export default createStore({
  state: {
  },
  mutations: {
    initializeStore(state) {
      if (localStorage.getItem('token')) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem('token');
        auth.state.isAuthenticated = true;
      } else {
        axios.defaults.headers.common["Authorization"] = "";
        auth.state.isAuthenticated = false;
      }
    },
  },
  actions: {},
  modules: {
    auth,
    user,
  },
});
