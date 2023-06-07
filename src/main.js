import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppLoader from './components/AppLoader.vue'
import AppAlert from './components/AppAlert.vue'
import { router } from './router';


const app = createApp(App)
app.component('app-loader', AppLoader)
app.component('app-alert', AppAlert)
app.use(router);
app.mount('#app')
