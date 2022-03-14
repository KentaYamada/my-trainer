import Vue, { PropType } from "vue";
import { RuleDecl } from "vue/types/options";
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
      type: Object as PropType<RuleDecl>
    },
    updateTitleHandler: {
      required: true,
      type: Function
    },
    updateGoalHandler: {
      required: true,
      type: Function
    },
    updateImplessionsHandler: {
      required: true,
      type: Function
    },
    updateMemoHandler: {
      required: true,
      type: Function
    },
    updateNextActionHandler: {
      required: true,
      type: Function
    },
    updatePlanHandler: {
      required: true,
      type: Function
    },
    updatePracticeDateHandler: {
      required: true,
      type: Function
    },
    updatePracticeTimeFromHandler: {
      required: true,
      type: Function
    },
    updatePracticeTimeToHandler: {
      required: true,
      type: Function
    }
  },
  template: "<report-form/>"
});
