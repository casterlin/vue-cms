import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import router from './router'
//初始化css样式
import './styles/common.css'
//引入mui的css文件
import './libs/mui/css/mui.css'
//引入mui拓展字体的css文件
import './libs/mui/css/icons-extra.css'

Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
