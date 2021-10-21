import { Module } from "vuex";
import { RootState } from "@/store";
import { CalendarEvent } from "@/models/calendar-event";
import { CalendarEventOption } from "@/models/calendar-event-option";
import actions from "@/store/calendar/actions";
import getters from "@/store/calendar/getters";
import mutations from "@/store/calendar/mutations";

export interface CalendarState {
  calendarEvents: Array<CalendarEvent[]>;
  options: CalendarEventOption;
}

const state: CalendarState = {
  calendarEvents: [],
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
