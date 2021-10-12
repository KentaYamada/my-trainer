import { collection, addDoc, DocumentReference } from "firebase/firestore";
import { ReportConverter } from "@/firebase/converters/report-converter";
import { db } from "@/firebase/firebase-app";
import { Report } from "@/models/report";

/**
 * Report collection CRUD service
 */
export class ReportService {
  static readonly COLLECTION_NAME = "reports";

  static async create(payload: Report): Promise<DocumentReference<Report>> {
    const newDoc = collection(db, "reports").withConverter(ReportConverter);
    return await addDoc(newDoc, payload);
  }
}
