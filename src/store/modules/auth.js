import axios from 'axios';
import router from '../../router';

export default {
  namespaced: true,
  state: {
    isAuthenticated: false,
    token: localStorage.getItem('token') || '',
    error: []
  },
  getters: {
    isAuthenticated: state => {
      return state.isAuthenticated;
    },
    token: state => {
      return state.token;
    },
    error: state => {
      return state.error;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
      state.isAuthenticated = true;
    },
    setError(state, err) {
      state.error = err;
    }
  },
  actions: {
    login: async ({ commit }, payload) => {
      await axios
        .post("/api/user/login", payload)
        .then(async (response) => {
          if (response.status == 200) {
            const token = response.data.token;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] =
              "Bearer " + localStorage.getItem("token");
            await commit("setToken", token);
            router.push("/dashboard/1");
          }

        }).catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            commit("setError", error.response.data.non_field_errors);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
        });
    }
  }
};