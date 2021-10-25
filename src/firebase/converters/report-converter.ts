import { DocumentData, FirestoreDataConverter, QueryDocumentSnapshot, SnapshotOptions } from "firebase/firestore";
import { Report } from "@/models/report";

export const ReportConverter: FirestoreDataConverter<Report> = {
  fromFirestore: (snapshot: QueryDocumentSnapshot, options?: SnapshotOptions): Report => {
    const data = snapshot.data(options);
    return new Report(
      snapshot.id,
      data.title,
      data.practice_date.toDate(),
      data.practice_time_from.toDate(),
      data.practice_time_to.toDate(),
      data.goal,
      data.plan,
      data.implessions,
      data.next_action,
      data.memo
    );
  },

  toFirestore: (payload: Report): DocumentData => {
    const today = new Date();
    const data: DocumentData = {
      title: payload.title,
      practice_date: payload.practice_date,
      practice_time_from: payload.practice_time_from,
      practice_time_to: payload.practice_time_to,
      goal: payload.goal,
      plan: payload.plan,
      implessions: payload.implessions,
      next_action: payload.next_action,
      memo: payload.memo,
      modified_at: today
    };

    if (payload.id === "") {
      data.created_at = today;
    }

    return data;
  }
};
