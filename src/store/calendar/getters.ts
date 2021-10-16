import { GetterTree } from "vuex";
import { CalendarOptions } from "@fullcalendar/core";
import { RootState } from "@/store";
import { CalendarState } from "@/store/calendar";
import { CALENDAR_OPTIONS } from "@/store/calendar/constatnt";

const getters: GetterTree<CalendarState, RootState> = {
  [CALENDAR_OPTIONS]: (state: CalendarState): CalendarOptions => {
    return state.options;
  }
};

export default getters;
