import { createApp } from 'vue'
// import { BootstrapVue } from 'bootstrap-vue'
import Toaster from "@meforma/vue-toaster";

import App from './App.vue'
import router from './router'
import commonMixin from './mixins/common'
import state from './store'

createApp(App)
    // .use(BootstrapVue)
    .use(router)
    .use(state)
    .use(Toaster)
    .mixin(commonMixin)
    .mount('#app')
