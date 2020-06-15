import Vue from "vue";
import App from "./App.vue";
import Scrollspy from "vue2-scrollspy";

Vue.config.productionTip = false;

Vue.use(Scrollspy);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
