import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import modal from "./plugins";
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';


Vue.config.productionTip = false;

Vue.use(modal);

new Vue({
  render: (h) => h(App),
  store,
  vuetify,
  router
}).$mount("#app");
