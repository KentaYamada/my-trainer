import { Module } from "vuex";
import { Report } from "@/models/report";
import { RootState } from "@/store";
import actions from "@/store/report/actions";
import getters from "@/store/report/getters";
import mutations from "@/store/report/mutations";

export interface ReportState {
  report: Report;
}

const state: ReportState = {
  report: {} as Report
};
const module: Module<ReportState, RootState> = {
  namespaced: true,
  actions: actions,
  getters: getters,
  mutations: mutations,
  state: state
};

export default module;
