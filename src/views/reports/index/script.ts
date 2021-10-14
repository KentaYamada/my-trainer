import Vue from "vue";
import "@fullcalendar/core/vdom";
import { CalendarOptions } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/vue";
import dayGridPlugin from "@fullcalendar/daygrid";

/**
 * Report index view
 */
export default Vue.extend({
  name: "report-index-view",
  components: {
    FullCalendar
  },
  data() {
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
          text: "レポート作成",
          click: () => {
            this.$router.push({ name: "ReportCreate" });
          }
        }
      }
    };

    return {
      options: options
    };
  }
});
