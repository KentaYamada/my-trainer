import moment from "moment";
import { ActionTree } from "vuex";
import { ReportService } from "@/firebase/report-service";
import { CalendarEvent } from "@/models/calendar-event";
import { CalendarEventOption } from "@/models/calendar-event-option";
import { Report } from "@/models/report";
import { RootState } from "@/store";
import { CalendarState } from "@/store/calendar";
import {
  FETCH_CALENDAR_EVENTS,
  INITIALIZE_OPTION,
  UPDATE_CALENDAR_EVENTS,
  UPDATE_OPTION,
  UPDATE_NEXT_MONTH,
  UPDATE_PREVIOUS_MONTH
} from "@/store/calendar/constatnt";

const actions: ActionTree<CalendarState, RootState> = {
  [FETCH_CALENDAR_EVENTS]: async ({ commit }, payload: CalendarEventOption) => {
    const firstDay = moment(payload.current).startOf("month");
    const lastDay = moment(payload.current).endOf("month");
    const weeks = Math.ceil(lastDay.diff(firstDay, "days") / 7);
    const calendarEvents: CalendarEvent[][] = [];

    for (let week = 0; week < weeks; week++) {
      const weeklyEvent: CalendarEvent[] = [];

      for (let day = 0; day < 7; day++) {
        const dailyEvent = new CalendarEvent("", null, 0, null, []);

        if (day === firstDay.day()) {
          dailyEvent.event_date = firstDay.toDate();
          dailyEvent.day = firstDay.date();
          dailyEvent.day_of_week = firstDay.day();
          firstDay.add(1, "day");
        }

        weeklyEvent.push(dailyEvent);
      }

      // const fromDate: Date = moment(payload.current).startOf("month").toDate();
      // const toDate: Date = moment(payload.current).startOf("month").toDate();
      // const reports: Report[] = await ReportService.fetch(fromDate, toDate);
      calendarEvents.push(weeklyEvent);
    }

    console.log(calendarEvents);
    commit(UPDATE_CALENDAR_EVENTS, calendarEvents);
  },

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
