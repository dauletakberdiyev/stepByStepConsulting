import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './locale'

i18n.global.locale = "ru"

const app = createApp(App)

app.config.globalProperties.instagramLink = "https://www.instagram.com/step_by_step_consulting/"
app.config.globalProperties.whatsappLink = "https://wa.me/77007006185"

app.use(router)
app.use(i18n)
app.mount('#app')
