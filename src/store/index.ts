import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/auth";
import report from "@/store/report";
import calendar from "@/store/calendar";

export interface RootState {
  version: string;
}

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    auth,
    report,
    calendar
  }
});
