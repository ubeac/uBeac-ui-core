import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import { serviceOptions } from "@/services/api/vacation";
const instance = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL
});


const app = createApp(App).use(store).use(router).use(VueAxios, instance)
serviceOptions.axios = app.config.globalProperties.axios

app.mount('#app')
