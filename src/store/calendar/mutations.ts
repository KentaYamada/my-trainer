import moment from "moment";
import { MutationTree } from "vuex";
import { CalendarEventOption } from "@/models/calendar-event-option";
import { CalendarState } from "@/store/calendar";
import { UPDATE_OPTION, UPDATE_NEXT_MONTH, UPDATE_PREVIOUS_MONTH } from "@/store/calendar/constatnt";

const mutations: MutationTree<CalendarState> = {
  [UPDATE_NEXT_MONTH]: (state: CalendarState, payload: number): void => {
    state.options.current = moment(state.options.current).add(payload, "months").toDate();
  },

  [UPDATE_OPTION]: (state: CalendarState, payload: CalendarEventOption): void => {
    state.options = payload;
  },

  [UPDATE_PREVIOUS_MONTH]: (state: CalendarState, payload: number): void => {
    state.options.current = moment(state.options.current).add(payload, "months").toDate();
  }
};

export default mutations;
