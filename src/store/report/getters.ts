import { GetterTree } from "vuex";
import { Report } from "@/models/report";
import { RootState } from "@/store";
import { ReportState } from "@/store/report";
import { REPORT } from "@/store/report/constant";

const getters: GetterTree<ReportState, RootState> = {
  [REPORT]: (state: ReportState): Report => {
    return state.report;
  }
};

export default getters;
