import Vue, { PropType } from "vue";
import { BModalConfig } from "buefy/types/components";
import { CalendarEvent } from "@/models/calendar-event";
import { DAY_OF_WEEK } from "@/models/day-of-week";

/**
 * Calendar daily event component
 */
export default Vue.extend({
  name: "calendar-daily-event",
  props: {
    dailyEvent: {
      required: true,
      type: Object as PropType<CalendarEvent>
    }
  },
  computed: {
    hasReport(): boolean {
      return this.dailyEvent.reports.length > 0;
    },

    isSaturday(): boolean {
      return this.dailyEvent.day_of_week === DAY_OF_WEEK.SATURDAY;
    },

    isHoliday(): boolean {
      return this.dailyEvent.day_of_week === DAY_OF_WEEK.SUNDAY;
    },

    visibleDailyEvent(): boolean {
      return this.dailyEvent.day > 0;
    }
  },
  methods: {
    handleShowReports(): void {
      const config: BModalConfig = {};
      this.$buefy.modal.open(config);
    }
  },
  template: "<calendar-daily-event/>"
});
