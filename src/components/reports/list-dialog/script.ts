import Vue, { PropType } from "vue";
import ReportListItem from "@/components/reports/list-item/ReportListItem.vue";
import { Report } from "@/models/report";

/**
 * Report list dialog
 */
export default Vue.extend({
  name: "report-list-dialog",
  components: {
    ReportListItem
  },
  props: {
    reports: {
      required: true,
      type: Array as PropType<Report[]>
    }
  },
  methods: {
    handleClose(): void {
      this.$emit("close");
    }
  }
});
