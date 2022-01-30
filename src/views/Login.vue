<template>
  <div class="login-page">
    <login-form></login-form>
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "Login",
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>