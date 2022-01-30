import axios from 'axios';

export default {
  namespaced: true,
  state: {
    userId: localStorage.getItem('user_id') || '',
    users: [],
    userLogs: {},
  },
  getters: {
    userId: state => {
      return state.userId;
    },
    users: state => {
      return state.users;
    },
    userLogs: state => {
      return state.userLogs;
    },
  },
  mutations: {
    setUserId(state, id) {
      localStorage.setItem("user_id", id);
    },
    setUsers(state, { user, index }) {
      state.users.push({
        key: index + 1,
        ...user
      });
    },
    clearUser(state) {
      state.users = [];
    },
    setUserLogs(state, logs) {
      state.userLogs = logs;
    },
    clearUserLogs(state) {
      state.userLogs = {};
    }
  },
  actions: {
    fetchUsers: async ({ commit }) => {
      await axios
        .get("/api/users")
        .then(async (response) => {
          commit("clearUser");
          const users = response.data;
          users.forEach((user, index) => {
            commit("setUsers", { user, index });
          });

        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
        });
    },
    fetchUserLogs: async ({ commit }, payload) => {
      await axios
        .get(`/api/user/${payload.id}/logs`)
        .then(async (response) => {
          commit("clearUserLogs");
          const userLogs = response.data;
          commit("setUserLogs", userLogs);
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data);
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