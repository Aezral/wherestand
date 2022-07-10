import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'
import App from './App.vue'

createApp(App)  .use(require("vue-cookies")).mount('#app')
