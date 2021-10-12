/**
 * Training Report model
 */
export class Report {
  id: string;
  practice_date: Date;
  practice_time_from: Date;
  practice_time_to: Date;
  goal: string;
  plan: string;
  implessions: string;
  next_action: string;
  memo: string;

  constructor(
    id: string,
    practiceDate: Date,
    practiceTimeFrom: Date,
    practiceTimeTo: Date,
    goal: string,
    plan: string,
    implessions: string,
    nextAction: string,
    memo: string
  ) {
    this.id = id;
    this.practice_date = practiceDate;
    this.practice_time_from = practiceTimeFrom;
    this.practice_time_to = practiceTimeTo;
    this.goal = goal;
    this.plan = plan;
    this.implessions = implessions;
    this.next_action = nextAction;
    this.memo = memo;
  }
}
