import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/index.scss'
import '@/scripts/elementui'
import ECharts from 'vue-echarts'
// import VCharts from 'v-charts'
// import 'v-charts/lib/style.css'
// Vue.use(VCharts)
import * as echarts from 'echarts';

Vue.config.productionTip = false
Vue.component('v-chart', ECharts)

Vue.prototype.$ECharts = ECharts

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
