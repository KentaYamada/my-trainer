import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import { BNoticeConfig } from "buefy/types/components";
import { FirestoreError } from "firebase/firestore";
import { required } from "vuelidate/lib/validators";
import ReportForm from "@/components/reports/form/ReportForm.vue";
import {
  FETCH_REPORT_BY_ID,
  INITIALIZE,
  REPORT,
  SAVE,
  UPDATE_GOAL,
  UPDATE_IMPLESSIONS,
  UPDATE_MEMO,
  UPDATE_NEXT_ACTION,
  UPDATE_PLAN,
  UPDATE_PRACTICE_DATE,
  UPDATE_PRACTICE_TIME_FROM,
  UPDATE_PRACTICE_TIME_TO,
  UPDATE_TITLE
} from "@/store/report/constant";

/**
 * Report create view
 */
export default Vue.extend({
  name: "report-create-view",
  components: {
    ReportForm
  },
  props: {
    id: {
      required: false,
      type: String,
      default: ""
    }
  },
  data() {
    return {
      progressing: false
    };
  },
  computed: {
    ...mapGetters("report", {
      report: REPORT
    })
  },
  created() {
    this.initialize();
  },
  mounted() {
    if (this.id !== "") {
      this.progressing = true;
      this.fetchReportById(this.id)
        .catch((error: FirestoreError) => this._showToastDanger(error.message))
        .finally(() => (this.progressing = false));
    }
  },
  methods: {
    ...mapActions("report", {
      fetchReportById: FETCH_REPORT_BY_ID,
      initialize: INITIALIZE,
      save: SAVE,
      updateGoal: UPDATE_GOAL,
      updateImplessions: UPDATE_IMPLESSIONS,
      updateMemo: UPDATE_MEMO,
      updateNextAction: UPDATE_NEXT_ACTION,
      updatePlan: UPDATE_PLAN,
      updatePracticeDate: UPDATE_PRACTICE_DATE,
      updatePracticeTimeFrom: UPDATE_PRACTICE_TIME_FROM,
      updatePracticeTimeTo: UPDATE_PRACTICE_TIME_TO,
      updateTitle: UPDATE_TITLE
    }),

    handleSave(): void {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.progressing = true;
        this.save(this.report)
          .then(() => {
            this._showToastSuccess("保存しました");

            if (this.id === "") {
              this.$router.push("/");
            } else {
              this.$router.push({ name: "ReportDetail", params: { id: this.id } });
            }
          })
          .catch((error: FirestoreError) => this._showToastDanger(error.message))
          .finally(() => (this.progressing = false));
      } else {
        this._showToastDanger("入力内容に誤りがあります。エラーメッセージを確認してください");
      }
    },

    handleUpdateTitle(value: string): void {
      this.updateTitle(value);
    },

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
    },

    _showToastDanger(message: string): void {
      const config: BNoticeConfig = {
        message: message,
        type: "is-danger"
      };
      this.$buefy.toast.open(config);
    },

    _showToastSuccess(message: string): void {
      const config: BNoticeConfig = {
        message: message,
        type: "is-success"
      };
      this.$buefy.toast.open(config);
    }
  },
  validations: {
    report: {
      title: {
        required
      },
      goal: {
        required
      },
      plan: {
        required
      }
    }
  }
});
