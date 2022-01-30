<template>
  <div class="login-form">
    <div class="form-section">
      <div class="title">Login</div>
      <div class="error-msg" v-for="error in errors" :key="error">
        {{ error }}
      </div>
      <div class="form">
        <form @submit.prevent="submitLoginForm">
          <div class="form-group">
            <input
              type="text"
              id="username"
              v-model="username"
              required
              pattern="[A-Za-z0-9]+"
            />
            <label for="username">Username</label>
          </div>
          <div class="form-group">
            <input
              type="password"
              id="password"
              v-model="password"
              required
              pattern="[^]+"
            />
            <label for="password">Password </label>
          </div>
          <div class="button-group">
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    ...mapGetters({
      errors: "auth/error",
    }),
  },
  methods: {
    ...mapActions({
      login: "auth/login",
    }),
    async submitLoginForm(e) {
      const formData = {
        username: this.username,
        password: this.password,
      };
      await this.login(formData);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/__form.scss";

.login-form {
  width: 40%;
  height: auto;
  padding: 30px 0;
  background-color: white;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 20px 0px;
}

.error-msg {
  font-size: 12px;
  margin: 20px 20px 0;
  font-weight: 500;
  color: rgb(252, 35, 79);
  background-color: rgba(252, 35, 79, 0.1);
  border-radius: 6px;
  padding: 10px;
}
</style>