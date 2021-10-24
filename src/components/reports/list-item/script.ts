import Vue, { PropType } from "vue";
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
  template: "<report-list-item/>"
});
