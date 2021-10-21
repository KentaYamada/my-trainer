import { Module } from "vuex";
import { RootState } from "@/store";
import { CalendarEventOption } from "@/models/calendar-event-option";
import actions from "@/store/calendar/actions";
import getters from "@/store/calendar/getters";
import mutations from "@/store/calendar/mutations";

export interface CalendarState {
  options: CalendarEventOption;
}

const state: CalendarState = {
  options: {} as CalendarEventOption
};
const module: Module<CalendarState, RootState> = {
  namespaced: true,
  actions: actions,
  getters: getters,
  mutations: mutations,
  state: state
};

export default module;
