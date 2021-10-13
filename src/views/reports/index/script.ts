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
      initialView: "dayGridMonth"
    };

    return {
      options: options
    };
  }
});
