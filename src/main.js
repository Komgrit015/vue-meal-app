import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import router from './router'
import * as filters from './filters'

// import './assets/main.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.config.globalProperties.$filters = filters

app.mount('#app')
