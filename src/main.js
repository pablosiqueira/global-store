import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
//import titleMixin from './mixins/titleMixin'

createApp(App).use(store).use(router).mount('#app')
