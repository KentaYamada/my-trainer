import Vue from "vue";
import { toYears } from "@/filters/date-format";

/**
 * Calendar header component
 */
export default Vue.extend({
  name: "calendar-header",
  props: {
    current: {
      required: true,
      type: Date
    }
  },
  filters: {
    toYears
  },
  methods: {
    handleCreateReport(): void {
      this.$emit("create-report");
    },

    handleCurrent(): void {
      this.$emit("current");
    },

    handleNextMonth(): void {
      this.$emit("next-month");
    },

    handlePreviousMonth(): void {
      this.$emit("previous-month");
    }
  },
  template: "<calendar-header/>"
});
