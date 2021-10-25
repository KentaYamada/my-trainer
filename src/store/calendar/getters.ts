import { GetterTree } from "vuex";
import { CalendarEvent } from "@/models/calendar-event";
import { CalendarEventOption } from "@/models/calendar-event-option";
import { RootState } from "@/store";
import { CalendarState } from "@/store/calendar";
import { CALENDAR_EVENTS, CALENDAR_OPTION } from "@/store/calendar/constatnt";

const getters: GetterTree<CalendarState, RootState> = {
  [CALENDAR_EVENTS]: (state: CalendarState): Array<CalendarEvent[]> => {
    return state.calendarEvents;
  },

  [CALENDAR_OPTION]: (state: CalendarState): CalendarEventOption => {
    return state.options;
  }
};

export default getters;
