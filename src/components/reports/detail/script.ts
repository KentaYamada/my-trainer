import Vue, { PropType } from "vue";
import { toDate, toTime } from "@/filters/date-format";
import { nl2br } from "@/filters/nl2br";
import { Report } from "@/models/report";

/**
 * Report detail component
 */
export default Vue.extend({
  name: "report-detail",
  props: {
    report: {
      required: true,
      type: Object as PropType<Report>
    }
  },
  filters: {
    nl2br,
    toDate,
    toTime
  },
  computed: {
    goal(): string {
      return nl2br(this.report.goal);
    },

    plan(): string {
      return nl2br(this.report.plan);
    },

    implessions(): string {
      return nl2br(this.report.implessions);
    },

    next_action(): string {
      return nl2br(this.report.next_action);
    },

    memo(): string {
      return nl2br(this.report.memo);
    }
  },
  template: "<report-detail/>"
});
