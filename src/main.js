import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlusCircle,
  faMinusCircle,
  faTrashAlt,
  faPencilAlt,
  faCopy,
  faSyncAlt
} from '@fortawesome/free-solid-svg-icons'
import {
  faTwitter,
  faGithub,
  faCodepen
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Meta from 'vue-meta'
import VueHighlightJS from 'vue-highlightjs'
import VueClipboard from 'vue-clipboard2'

// Conic gradients
import 'prefixfree'
import 'conic-gradient'

library.add(
  faTwitter,
  faGithub,
  faPlusCircle,
  faMinusCircle,
  faTrashAlt,
  faPencilAlt,
  faCodepen,
  faCopy,
  faSyncAlt
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Meta, {
  keyName: 'metaInfo', // the component option name that vue-meta looks for meta info on.
  attribute: 'data-vue-meta', // the attribute name vue-meta adds to the tags it observes
  ssrAttribute: 'data-vue-meta-server-rendered', // the attribute name that lets vue-meta know that meta info has already been server-rendered
  tagIDKeyName: 'vmid' // the property name that vue-meta uses to determine whether to overwrite or append a tag
})
Vue.use(VueHighlightJS)
Vue.use(VueClipboard)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
