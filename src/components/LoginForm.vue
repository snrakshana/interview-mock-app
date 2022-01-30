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
.login-form {
  width: 40%;
  height: auto;
  padding: 30px 0;
  background-color: white;
  border-radius: 6px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 20px 0px;
  @media only screen and (max-width: 480px) {
    width: 80%;
  }
}

.form-section {
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
  .title {
    font-size: 28px;
    font-weight: 700;
    text-transform: capitalize;
    margin: 10px 0 3px;
  }
  .form {
    padding: 20px;
  }
}
.form-group {
  display: flex;
  flex-direction: column;
  margin: 10px 0 25px;
  position: relative;
  label {
    position: absolute;
    top: 0;
    left: 0;
    margin: 10px;
    color: rgba(black, 0.5);
    font-size: 14px;
    font-weight: 500;
    transition: all 0.25s ease-out;
  }
  input {
    padding: 10px;
    border-radius: 6px;
    outline: unset;
    background-color: transparent;
    border: solid 1px rgba(black, 0.4);
    transition: border 0.3s ease-in, box-shadow 0.5s ease;
    &:hover {
      box-shadow: 0 0 8px 2px rgb(130 47 175/30%);
    }
    &:focus {
      border-color: rgb(252, 35, 79);
      box-shadow: 0 0 8px 2px rgb(130 47 175/30%);
    }
    &:valid ~ label,
    &:focus ~ label {
      transform: translateY(-140%);
      z-index: 2;
      background-color: #ffffff;
      padding: 0 5px;
    }
    &:focus ~ label {
      color: rgb(252, 35, 79);
    }
  }
}
.button-group {
  margin-top: 30px;
  button {
    width: 100%;
    outline: none;
    margin: auto;
    border-radius: 6px;
    border: none;
    background-color: rgb(252, 35, 79);
    color: #ffffff;
    font-size: 10px;
    font-weight: bold;
    padding: 10px 20px;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-align: center;
    transition: transform 80ms ease-in;
    &:hover {
      cursor: pointer;
    }
    &:active {
      transform: scale(0.95);
    }
  }
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