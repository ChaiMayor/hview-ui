import {createApp} from 'vue'
import App from './app.vue'
import router from './router'
import './style/base.less'

import HViewPlus from '../packages/components/src'
const app = createApp(App)

app.use(HViewPlus).use(router).mount('#app')