import Vue from "vue";
import Vuex from "vuex";
import report from "@/store/report";

export interface RootState {
  version: string;
}

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    report
  }
});
