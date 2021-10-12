import Vue, { PropType } from "vue";
import { Report } from "@/models/report";

/**
 * Report form component
 */
export default Vue.extend({
  name: "report-form",
  props: {
    report: {
      required: true,
      type: Object as PropType<Report>
    },
    validations: {
      required: true,
      type: Object
    }
  },
  methods: {
    handleUpdatePracticeDate(value: Date): void {
      this.$emit("update-practice-date", value);
    },

    handleUpdatePracticeTimeFrom(value: Date): void {
      this.$emit("update-practice-time-from", value);
    },

    handleUpdatePracticeTimeTo(value: Date): void {
      this.$emit("update-practice-time-to", value);
    },

    handleUpdateGoal(value: string): void {
      this.$emit("update-goal", value);
    },

    handleUpdatePlan(value: string): void {
      this.$emit("update-plan", value);
    },

    handleUpdateImplessions(value: string): void {
      this.$emit("update-implessions", value);
    },

    handleUpdateNextAction(value: string): void {
      this.$emit("update-next-action", value);
    },

    handleUpdateMemo(value: string): void {
      this.$emit("update-memo", value);
    }
  },
  template: "<report-form/>"
});
