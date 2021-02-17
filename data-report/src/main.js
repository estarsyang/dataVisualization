import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/index.scss'
import '@/scripts/elementui'
import ECharts from 'vue-echarts'
import * as echarts from 'echarts';

Vue.config.productionTip = false
Vue.component('v-chart', ECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
