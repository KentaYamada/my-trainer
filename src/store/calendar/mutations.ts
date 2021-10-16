import { MutationTree } from "vuex";
import { CalendarOptions } from "@fullcalendar/core";
import { CalendarState } from "@/store/calendar";
import { UPDATE_OPTIONS } from "@/store/calendar/constatnt";

const mutations: MutationTree<CalendarState> = {
  [UPDATE_OPTIONS]: (state: CalendarState, payload: CalendarOptions): void => {
    state.options = payload;
  }
};

export default mutations;
