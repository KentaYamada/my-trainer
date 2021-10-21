import { GetterTree } from "vuex";
import { CalendarEventOption } from "@/models/calendar-event-option";
import { RootState } from "@/store";
import { CalendarState } from "@/store/calendar";
import { CALENDAR_OPTION } from "@/store/calendar/constatnt";

const getters: GetterTree<CalendarState, RootState> = {
  [CALENDAR_OPTION]: (state: CalendarState): CalendarEventOption => {
    return state.options;
  }
};

export default getters;
