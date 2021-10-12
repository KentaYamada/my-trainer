import { ActionTree } from "vuex";
import { Report } from "@/models/report";
import { RootState } from "@/store";
import { ReportState } from "@/store/report";
import {
  INITIALIZE,
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

const actions: ActionTree<ReportState, RootState> = {
  [INITIALIZE]: ({ commit }) => {
    const payload = new Report("", new Date(), new Date(), new Date(), "", "", "", "", "");
    commit(UPDATE_REPORT, payload);
  },

  [UPDATE_GOAL]: ({ commit }, payload: string): void => {
    commit(UPDATE_GOAL, payload);
  },

  [UPDATE_IMPLESSIONS]: ({ commit }, payload: string): void => {
    commit(UPDATE_IMPLESSIONS, payload);
  },

  [UPDATE_MEMO]: ({ commit }, payload: string): void => {
    commit(UPDATE_MEMO, payload);
  },

  [UPDATE_NEXT_ACTION]: ({ commit }, payload: string): void => {
    commit(UPDATE_NEXT_ACTION, payload);
  },

  [UPDATE_PLAN]: ({ commit }, payload: string): void => {
    commit(UPDATE_PLAN, payload);
  },

  [UPDATE_PRACTICE_DATE]: ({ commit }, payload: Date): void => {
    commit(UPDATE_PRACTICE_DATE, payload);
  },

  [UPDATE_PRACTICE_TIME_FROM]: ({ commit }, payload: Date): void => {
    commit(UPDATE_PRACTICE_TIME_FROM, payload);
  },

  [UPDATE_PRACTICE_TIME_TO]: ({ commit }, payload: Date): void => {
    commit(UPDATE_PRACTICE_TIME_TO, payload);
  },

  [UPDATE_REPORT]: ({ commit }, payload: Report): void => {
    commit(UPDATE_REPORT, payload);
  }
};

export default actions;