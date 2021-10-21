import { ActionTree } from "vuex";
import { CalendarEventOption } from "@/models/calendar-event-option";
import { RootState } from "@/store";
import { CalendarState } from "@/store/calendar";
import { INITIALIZE_OPTION, UPDATE_OPTION, UPDATE_NEXT_MONTH, UPDATE_PREVIOUS_MONTH } from "@/store/calendar/constatnt";

const actions: ActionTree<CalendarState, RootState> = {
  [INITIALIZE_OPTION]: ({ commit }) => {
    const option = new CalendarEventOption(new Date());
    commit(UPDATE_OPTION, option);
  },

  [UPDATE_NEXT_MONTH]: ({ commit }) => {
    commit(UPDATE_NEXT_MONTH, 1);
  },

  [UPDATE_PREVIOUS_MONTH]: ({ commit }) => {
    commit(UPDATE_NEXT_MONTH, -1);
  }
};

export default actions;
