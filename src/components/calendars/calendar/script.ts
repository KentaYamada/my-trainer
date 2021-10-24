import Vue, { PropType } from "vue";
import CalendarDailyEvent from "@/components/calendars/daily-event/CalendarDailyEvent.vue";
import { CalendarEvent } from "@/models/calendar-event";

/**
 * calendar component
 */
export default Vue.extend({
  name: "calendar",
  components: {
    CalendarDailyEvent
  },
  props: {
    calendarEvents: {
      required: true,
      type: Array as PropType<CalendarEvent[][]>
    }
  },
  template: "<calendar/>"
});
