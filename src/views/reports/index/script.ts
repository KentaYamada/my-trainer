import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import FullCalendar from "@fullcalendar/vue";
import { CALENDAR_OPTIONS, INITIALIZE_OPTIONS } from "@/store/calendar/constatnt";

/**
 * Report index view
 */
export default Vue.extend({
  name: "report-index-view",
  components: {
    FullCalendar
  },
  computed: {
    ...mapGetters("calendar", {
      options: CALENDAR_OPTIONS
    })
  },
  created() {
    this.initializeOptions();
  },
  methods: {
    ...mapActions("calendar", {
      initializeOptions: INITIALIZE_OPTIONS
    })
  }
});
