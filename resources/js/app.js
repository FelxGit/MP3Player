
window.Vue = require('vue');
import router from './config/routes.js'
import axios from './config/axios.js'
import App from './views/App.vue'

Vue.prototype.$http = axios

const app = new Vue({
    el: '#app',
    components: { App },
    router
});
