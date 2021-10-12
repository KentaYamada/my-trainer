import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import ReportForm from "@/components/reports/form/ReportForm.vue";
import {
  INITIALIZE,
  REPORT,
  UPDATE_GOAL,
  UPDATE_IMPLESSIONS,
  UPDATE_MEMO,
  UPDATE_NEXT_ACTION,
  UPDATE_PLAN,
  UPDATE_PRACTICE_DATE,
  UPDATE_PRACTICE_TIME_FROM,
  UPDATE_PRACTICE_TIME_TO
} from "@/store/report/constant";

/**
 * Report create view
 */
export default Vue.extend({
  name: "report-create-view",
  components: {
    ReportForm
  },
  computed: {
    ...mapGetters("report", {
      report: REPORT
    })
  },
  mounted() {
    this.initialize();
  },
  methods: {
    ...mapActions("report", {
      initialize: INITIALIZE,
      updateGoal: UPDATE_GOAL,
      updateImplessions: UPDATE_IMPLESSIONS,
      updateMemo: UPDATE_MEMO,
      updateNextAction: UPDATE_NEXT_ACTION,
      updatePlan: UPDATE_PLAN,
      updatePracticeDate: UPDATE_PRACTICE_DATE,
      updatePracticeTimeFrom: UPDATE_PRACTICE_TIME_FROM,
      updatePracticeTimeTo: UPDATE_PRACTICE_TIME_TO
    }),

    handleUpdatePracticeDate(value: Date): void {
      this.updatePracticeDate(value);
    },

    handleUpdatePracticeTimeFrom(value: Date): void {
      this.updatePracticeTimeFrom(value);
    },

    handleUpdatePracticeTimeTo(value: Date): void {
      this.updatePracticeTimeTo(value);
    },

    handleUpdateGoal(value: string): void {
      this.updateGoal(value);
    },

    handleUpdatePlan(value: string): void {
      this.updatePlan(value);
    },

    handleUpdateImplessions(value: string): void {
      this.updateImplessions(value);
    },

    handleUpdateNextAction(value: string): void {
      this.updateNextAction(value);
    },

    handleUpdateMemo(value: string): void {
      this.updateMemo(value);
    }
  }
});
