import Vue from "vue";
import Buefy from "buefy";
import Vuelidate from "vuelidate";
import App from "@/views/app/App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "buefy/dist/buefy.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";

Vue.config.productionTip = false;
Vue.use(Buefy, { defaultIconPack: "fas" });
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
