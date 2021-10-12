import Vue from "vue";

/**
 * Report form component
 */
export default Vue.extend({
  name: "report-form",
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
    }
  },
  template: "<report-form/>"
});
