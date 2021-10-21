import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import CalendarEvents from "@/components/calendars/events/CalendarEvents.vue";
import CalendarHeader from "@/components/calendars/header/CalendarHeader.vue";
import {
  CALENDAR_EVENTS,
  CALENDAR_OPTION,
  FETCH_CALENDAR_EVENTS,
  INITIALIZE_OPTION,
  UPDATE_NEXT_MONTH,
  UPDATE_PREVIOUS_MONTH
} from "@/store/calendar/constatnt";

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
      progressing: false
    };
  },
  computed: {
    ...mapGetters("calendar", {
      calendarEvents: CALENDAR_EVENTS,
      calendarOption: CALENDAR_OPTION
    })
  },
  created() {
    this.initializeOption();
  },
  mounted() {
    this.fetchCalendarEvents();
  },
  methods: {
    ...mapActions("calendar", {
      fetchCalendarEvents: FETCH_CALENDAR_EVENTS,
      initializeOption: INITIALIZE_OPTION,
      updateNextMonth: UPDATE_NEXT_MONTH,
      updatePreviousMonth: UPDATE_PREVIOUS_MONTH
    }),

    handleCurrent(): void {
      this.initializeOption();
    },

    handleCreateReport(): void {
      this.$router.push({ name: "ReportCreate" });
    },

    handleNextMonth(): void {
      this.updateNextMonth();
    },

    handlePreviousMonth(): void {
      this.updatePreviousMonth();
    }
  }
});
