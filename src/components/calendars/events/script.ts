import Vue, { PropType } from "vue";
import CalendarEventComponent from "@/components/calendars/event/CalendarEvent.vue";
import { CalendarEvent } from "@/models/calendar-event";

/**
 * Calendar events component
 */
export default Vue.extend({
  name: "calendar-events",
  components: {
    CalendarEventComponent
  },
  props: {
    calendarEvents: {
      required: true,
      type: Array as PropType<CalendarEvent[][]>
    }
  },
  template: "<calendar-events/>"
});
