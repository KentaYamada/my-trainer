import Vue from "vue";
// import { mapActions, mapGetters } from "vuex";
import CalendarEvents from "@/components/calendars/events/CalendarEvents.vue";
import CalendarHeader from "@/components/calendars/header/CalendarHeader.vue";

/**
 * Report index view
 */
export default Vue.extend({
  name: "report-index-view",
  components: {
    CalendarEvents,
    CalendarHeader
  },
  data() {
    return {
      current: new Date()
    };
  }
});
