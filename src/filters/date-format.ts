import moment from "moment";

export const toYears = (payload: Date): string => {
  return moment(payload).format("YYYY年MM月");
};

export const toDate = (payload: Date): string => {
  return moment(payload).format("YYYY年MM月DD日");
};

export const toTime = (payload: Date): string => {
  return moment(payload).format("HH:mm");
};
