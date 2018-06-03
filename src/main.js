import Vue from 'vue'

import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/tooltip'

Vue.component('chart', ECharts)

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)

import App from './App'

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
