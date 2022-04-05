import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/theme.min.css'

// Do we need to import it this way, can we just use CSS classes? 
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faBell } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()


const app = createApp(App)

app.use(router)

app.mount('#app')
