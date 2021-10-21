import { ActionTree } from "vuex";
// import { ReportService } from "@/firebase/report-service";
import { CalendarEvent } from "@/models/calendar-event";
import { CalendarEventOption } from "@/models/calendar-event-option";
import { Report } from "@/models/report";
import { DAY_OF_WEEK } from "@/models/day-of-week";
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
  [FETCH_CALENDAR_EVENTS]: async ({ commit }) => {
    // const reports: Report[] = await ReportService.fetch();
    const calendarEvents: CalendarEvent[][] = [
      [
        new CalendarEvent("", null, 0, DAY_OF_WEEK.SUNDAY, []),
        new CalendarEvent("", null, 0, DAY_OF_WEEK.MONDAY, []),
        new CalendarEvent("", null, 0, DAY_OF_WEEK.TUESDAY, []),
        new CalendarEvent("", null, 0, DAY_OF_WEEK.WEDNESDAY, []),
        new CalendarEvent("", null, 0, DAY_OF_WEEK.THURSDAY, []),
        new CalendarEvent("", null, 1, DAY_OF_WEEK.FRIDAY, [
          new Report("1", new Date(), new Date(), new Date(), "test", "test", "test", "test", "")
        ]),
        new CalendarEvent("", null, 2, DAY_OF_WEEK.SATURDAY, [])
      ],
      [
        new CalendarEvent("", null, 3, DAY_OF_WEEK.SUNDAY, []),
        new CalendarEvent("", null, 4, DAY_OF_WEEK.MONDAY, []),
        new CalendarEvent("", null, 5, DAY_OF_WEEK.TUESDAY, []),
        new CalendarEvent("", null, 6, DAY_OF_WEEK.WEDNESDAY, []),
        new CalendarEvent("", null, 7, DAY_OF_WEEK.THURSDAY, []),
        new CalendarEvent("", null, 8, DAY_OF_WEEK.FRIDAY, []),
        new CalendarEvent("", null, 9, DAY_OF_WEEK.SATURDAY, [])
      ],
      [
        new CalendarEvent("", null, 10, DAY_OF_WEEK.SUNDAY, []),
        new CalendarEvent("", null, 11, DAY_OF_WEEK.MONDAY, []),
        new CalendarEvent("", null, 12, DAY_OF_WEEK.TUESDAY, []),
        new CalendarEvent("", null, 13, DAY_OF_WEEK.WEDNESDAY, []),
        new CalendarEvent("", null, 14, DAY_OF_WEEK.THURSDAY, []),
        new CalendarEvent("", null, 15, DAY_OF_WEEK.FRIDAY, []),
        new CalendarEvent("", null, 16, DAY_OF_WEEK.SATURDAY, [])
      ],
      [
        new CalendarEvent("", null, 17, DAY_OF_WEEK.SUNDAY, []),
        new CalendarEvent("", null, 18, DAY_OF_WEEK.MONDAY, []),
        new CalendarEvent("", null, 19, DAY_OF_WEEK.TUESDAY, []),
        new CalendarEvent("", null, 20, DAY_OF_WEEK.WEDNESDAY, []),
        new CalendarEvent("", null, 21, DAY_OF_WEEK.THURSDAY, []),
        new CalendarEvent("", null, 22, DAY_OF_WEEK.FRIDAY, []),
        new CalendarEvent("", null, 23, DAY_OF_WEEK.SATURDAY, [])
      ],
      [
        new CalendarEvent("", null, 24, DAY_OF_WEEK.SUNDAY, []),
        new CalendarEvent("", null, 25, DAY_OF_WEEK.MONDAY, []),
        new CalendarEvent("", null, 26, DAY_OF_WEEK.TUESDAY, []),
        new CalendarEvent("", null, 27, DAY_OF_WEEK.WEDNESDAY, []),
        new CalendarEvent("", null, 28, DAY_OF_WEEK.THURSDAY, []),
        new CalendarEvent("", null, 29, DAY_OF_WEEK.FRIDAY, []),
        new CalendarEvent("", null, 30, DAY_OF_WEEK.SATURDAY, [])
      ],
      [
        new CalendarEvent("", null, 31, DAY_OF_WEEK.SUNDAY, []),
        new CalendarEvent("", null, 0, DAY_OF_WEEK.MONDAY, []),
        new CalendarEvent("", null, 0, DAY_OF_WEEK.TUESDAY, []),
        new CalendarEvent("", null, 0, DAY_OF_WEEK.WEDNESDAY, []),
        new CalendarEvent("", null, 0, DAY_OF_WEEK.THURSDAY, []),
        new CalendarEvent("", null, 0, DAY_OF_WEEK.FRIDAY, []),
        new CalendarEvent("", null, 0, DAY_OF_WEEK.SATURDAY, [])
      ]
    ];

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
