import moment from "moment";

export const toYears = (payload: Date): string => {
  return moment(payload).format("YYYY年MM月");
};
