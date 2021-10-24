import Vue, { PropType } from "vue";
import { toTime } from "@/filters/date-format";
import { Report } from "@/models/report";

/**
 * Report list item component
 */
export default Vue.extend({
  name: "report-list-item",
  props: {
    report: {
      required: true,
      type: Object as PropType<Report>
    }
  },
  filters: {
    toTime
  },
  methods: {
    handleRedirectToDetail(): void {
      this.$emit("redirect-to-detail", this.report.id);
    }
  },
  template: "<report-list-item/>"
});
