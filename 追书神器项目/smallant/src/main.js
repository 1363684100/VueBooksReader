import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/inconfont/iconfont.css'

Vue.config.productionTip = false

import 'mui/css/mui.css'
import 'mui/css/icons-extra.css'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

import 'lib-flexible'
import moment from 'moment'
Vue.filter('dateFormat',function(msg, pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(msg).format(pattern)
  })

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

