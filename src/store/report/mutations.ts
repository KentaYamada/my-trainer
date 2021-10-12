import { MutationTree } from "vuex";
import { Report } from "@/models/report";
import { ReportState } from "@/store/report";
import {
  UPDATE_GOAL,
  UPDATE_IMPLESSIONS,
  UPDATE_MEMO,
  UPDATE_NEXT_ACTION,
  UPDATE_PLAN,
  UPDATE_PRACTICE_DATE,
  UPDATE_PRACTICE_TIME_FROM,
  UPDATE_PRACTICE_TIME_TO,
  UPDATE_REPORT
} from "@/store/report/constant";

const mutations: MutationTree<ReportState> = {
  [UPDATE_GOAL]: (state: ReportState, payload: string): void => {
    state.report.goal = payload;
  },

  [UPDATE_IMPLESSIONS]: (state: ReportState, payload: string): void => {
    state.report.implessions = payload;
  },

  [UPDATE_MEMO]: (state: ReportState, payload: string): void => {
    state.report.memo = payload;
  },

  [UPDATE_NEXT_ACTION]: (state: ReportState, payload: string): void => {
    state.report.next_action = payload;
  },

  [UPDATE_PLAN]: (state: ReportState, payload: string): void => {
    state.report.plan = payload;
  },

  [UPDATE_PRACTICE_DATE]: (state: ReportState, payload: Date): void => {
    state.report.practice_date = payload;
  },

  [UPDATE_PRACTICE_TIME_FROM]: (state: ReportState, payload: Date): void => {
    state.report.practice_time_from = payload;
  },

  [UPDATE_PRACTICE_TIME_TO]: (state: ReportState, payload: Date): void => {
    state.report.practice_time_to = payload;
  },

  [UPDATE_REPORT]: (state: ReportState, payload: Report): void => {
    state.report = payload;
  }
};

export default mutations;
