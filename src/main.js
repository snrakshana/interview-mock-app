import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

createApp(App).use(store).use(router, axios).mount("#app");
