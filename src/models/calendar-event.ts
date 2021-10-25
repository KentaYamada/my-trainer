import { Report } from "@/models/report";
import { DAY_OF_WEEK } from "@/models/day-of-week";

/**
 * Calendar event model
 */
export class CalendarEvent {
  id: string;
  event_date: Date | null;
  day: number;
  day_of_week: DAY_OF_WEEK | null;
  reports: Report[];

  constructor(id: string, event_date: Date | null, day: number, dayOfWeek: DAY_OF_WEEK | null, reports: Report[] = []) {
    this.id = id;
    this.event_date = event_date;
    this.day = day;
    this.day_of_week = dayOfWeek;
    this.reports = reports;
  }
}
