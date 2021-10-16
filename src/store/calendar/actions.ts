import "@fullcalendar/core/vdom";
import { CalendarOptions } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
import { ActionTree } from "vuex";
import { RootState } from "@/store";
import { CalendarState } from "@/store/calendar";
import { INITIALIZE_OPTIONS, UPDATE_OPTIONS } from "@/store/calendar/constatnt";

const actions: ActionTree<CalendarState, RootState> = {
  [INITIALIZE_OPTIONS]: ({ commit }) => {
    const options: CalendarOptions = {
      plugins: [dayGridPlugin],
      initialView: "dayGridMonth",
      locale: "ja",
      timeZone: "Asia/Tokyo",
      headerToolbar: {
        start: "today prev,next",
        center: "title",
        end: "createReportButton"
      },
      buttonText: {
        today: "今日"
      },
      businessHours: true,
      navLinks: false,
      customButtons: {
        createReportButton: {
          text: "レポート作成"
          // click: () => {
          //   this.$router.push({ name: "ReportCreate" });
          // }
        }
      }
    };
    commit(UPDATE_OPTIONS, options);
  }
};

export default actions;
