import { Report } from "@/models/report";

/**
 * Calendar event model
 */
export class CalendarEvent {
  id: string;
  day: Date;
  weekday: number;
  reports: Report[];

  constructor(id: string, day: Date, weekday: number, reports: Report[] = []) {
    this.id = id;
    this.day = day;
    this.weekday = weekday;
    this.reports = reports;
  }
}
