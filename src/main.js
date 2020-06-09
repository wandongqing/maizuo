import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Tabbar,
  TabbarItem,
  Tab,
  Tabs,
  Search,
  NavBar,
  Icon,
  List,
  Cell,
  Tag,
  Button,
  Image as VanImage,
  Dialog,
  Loading,
  IndexBar,
  IndexAnchor
} from 'vant'

Vue.use(Loading);
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(Search)
Vue.use(Dialog);
Vue.use(Tabbar);
Vue.use(Button);
Vue.use(VanImage);
Vue.use(TabbarItem)
Vue.use(Tab);
Vue.use(Tabs)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(List)
Vue.use(Cell)
Vue.use(Tag)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
