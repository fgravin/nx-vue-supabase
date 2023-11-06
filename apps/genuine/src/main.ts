import './styles.css'

import { createApp } from 'vue'
import App from './app/App.vue'
import { createPinia } from 'pinia'
import router from './app/router'

const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#root')
