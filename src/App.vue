<template>
  <div class="page-container">
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
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
  width: 0;
}
</style>
