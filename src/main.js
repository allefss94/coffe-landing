import './assets/main.css'
import 'vue3-toastify/dist/index.css';
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Vue3Toasity from 'vue3-toastify';

import App from './App.vue'
import router from './router'
import VueApexCharts from 'vue3-apexcharts';
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts)
app.use(Vue3Toasity, {
  autoClose: 3000
})
app.mount('#app')
