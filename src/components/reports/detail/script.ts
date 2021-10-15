import Vue, { PropType } from "vue";
import { BDialogConfig } from "buefy/types/components";
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
  methods: {
    handleDelete(): void {
      const config: BDialogConfig = {
        message: "データを削除します。よろしいですか？"
      };
      this.$buefy.dialog.confirm(config);
    },

    handleEdit(): void {
      this.$emit("edit-report", this.report.id);
    }
  },
  template: "<report-detail/>"
});
