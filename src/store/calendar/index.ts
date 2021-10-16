import { Module } from "vuex";
import { RootState } from "@/store";
import { CalendarOptions } from "@fullcalendar/core";
import actions from "@/store/calendar/actions";
import getters from "@/store/calendar/getters";
import mutations from "@/store/calendar/mutations";

export interface CalendarState {
  options: CalendarOptions;
}

const state: CalendarState = {
  options: {} as CalendarOptions
};
const module: Module<CalendarState, RootState> = {
  namespaced: true,
  actions: actions,
  getters: getters,
  mutations: mutations,
  state: state
};

export default module;
