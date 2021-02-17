import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/style/index.scss'
import ECharts from 'vue-echarts'
import * as echarts from 'echarts';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.component('v-chart', ECharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
