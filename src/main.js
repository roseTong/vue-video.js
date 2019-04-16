import Vue from 'vue'
import App from './App.vue'

import Video from 'video.js'
import 'video.js/dist/video-js.css'

Vue.prototype.$video = Video

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
