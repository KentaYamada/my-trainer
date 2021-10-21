import Vue, { PropType } from "vue";
import { CalendarEvent } from "@/models/calendar-event";

/**
 * Calendar event component
 */
export default Vue.extend({
  name: "calendar-event",
  props: {
    dailyEvent: {
      required: true,
      type: Object as PropType<CalendarEvent[]>
    }
  },
  template: "<calendar-event/>"
});
