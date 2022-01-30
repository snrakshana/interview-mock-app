import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API;
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.response.use((response) => {
    return response;
}, async (error) => {
    if (error.response.data.detail == "Signature has expired.") { // status code for expired token
        router.push("/login/");
    }
});

createApp(App).use(store).use(router, axios).mount("#app");
