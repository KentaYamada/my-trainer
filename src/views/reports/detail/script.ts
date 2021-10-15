import Vue from "vue";
import { mapActions, mapGetters } from "vuex";
import { BDialogConfig, BNoticeConfig } from "buefy/types/components";
import { FirestoreError } from "firebase/firestore";
import ReportDetail from "@/components/reports/detail/ReportDetail.vue";
import { FETCH_REPORT_BY_ID, INITIALIZE, REPORT } from "@/store/report/constant";

/**
 * Report detail views
 */
export default Vue.extend({
  name: "report-detail-view",
  components: {
    ReportDetail
  },
  props: {
    id: {
      required: true,
      type: String
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
    this.progressing = true;
    this.fetchReportById(this.id)
      .catch((error: FirestoreError) => {
        const config: BNoticeConfig = {
          message: error.message,
          type: "is-danger"
        };
        this.$buefy.toast.open(config);
      })
      .finally(() => (this.progressing = false));
  },
  methods: {
    ...mapActions("report", {
      fetchReportById: FETCH_REPORT_BY_ID,
      initialize: INITIALIZE
    }),

    handleEdit(): void {
      this.$router.push({ name: "ReportEdit", params: { id: this.report.id } });
    },

    handleDelete(): void {
      const config: BDialogConfig = {
        type: "is-danger",
        message: "データを削除します。よろしいですか？",
        confirmText: "削除",
        cancelText: "閉じる",
        hasIcon: true,
        iconPack: "fas",
        icon: "exclamation-circle"
      };
      this.$buefy.dialog.confirm(config);
    }
  }
});
