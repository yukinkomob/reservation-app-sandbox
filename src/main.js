import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import router from "./router/router.js";
// import store from "./store";

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.config.productionTip = false;

document.addEventListener("DOMContentLoaded", () => {
  const app = new Vue({
    router,
    // TODO エラー「context.require is not function」を解決する
    // store,

    render: (h) => h(App)
  }).$mount();
  document.body.appendChild(app.$el);

  console.log(app);
});
