import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import vuecookies from 'vue-cookies'

createApp(App).use(vuecookies, { expire: '365d'}).mount('#app')
