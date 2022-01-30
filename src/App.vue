<template>
  <navbar></navbar>
  <div class="page-container">
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import Navbar from "./components/Navbar.vue";
export default {
  components: { Navbar },
  name: "App",
  beforeCreate() {
    this.$store.commit("initializeStore");
  },
  computed: {
    ...mapGetters({
      token: "auth/token",
      isAuthenticated: "auth/isAuthenticated",
      users: "user/users",
    }),
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;400;500;600;700;800;900&display=swap");
.circle {
  width: 50px;
  height: 50px;
  background: linear-gradient(
    45deg,
    rgb(158, 97, 153),
    rgb(158, 97, 153) 25%,
    rgb(158, 97, 0) 25%,
    rgb(158, 0, 0) 40%,
    rgb(130, 192, 151) 40%,
    rgb(130, 192, 151) 55%,
    rgb(240, 197, 57) 55%,
    rgb(240, 197, 57) 70%,
    rgb(212, 152, 207) 70%
  );
  border-radius: 50%;
}
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(54, 54, 54);
  background-color: whitesmoke;
}
.page-container {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.page-container::-webkit-scrollbar {
  width: 6px;
}
.page-container::-webkit-scrollbar-thumb {
  background: #6a6a6b;
}

.page-container::-webkit-scrollbar-thumb:hover {
  background: #6a6a6b;
}
// html {
//   &::-webkit-scrollbar {
//     width: 6px;
//   }
//   &::-webkit-scrollbar-thumb {
//     background: #6a6a6b;
//   }
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
