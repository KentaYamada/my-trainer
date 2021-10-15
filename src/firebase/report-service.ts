import {
  addDoc,
  collection,
  doc,
  runTransaction,
  CollectionReference,
  DocumentReference,
  DocumentSnapshot,
  Transaction
} from "firebase/firestore";
import { ReportConverter } from "@/firebase/converters/report-converter";
import { db } from "@/firebase/firebase-app";
import { BadRequest } from "@/models/bad-request";
import { NotFound } from "@/models/not-found";
import { Report } from "@/models/report";

/**
 * Report collection CRUD service
 */
export class ReportService {
  static readonly COLLECTION_NAME = "reports";

  static async create(payload: Report): Promise<DocumentReference<Report>> {
    const newDoc: CollectionReference<Report> = collection(db, ReportService.COLLECTION_NAME).withConverter(
      ReportConverter
    );
    return await addDoc(newDoc, payload);
  }

  static async edit(payload: Report): Promise<DocumentReference<Report>> {
    const transaction = runTransaction(db, async (transaction: Transaction) => {
      if (payload.id === "") {
        return Promise.reject(new BadRequest("IDをセットしてください"));
      }

      const docRef: DocumentReference<Report> = doc(db, ReportService.COLLECTION_NAME, payload.id).withConverter(
        ReportConverter
      );
      const snapshot: DocumentSnapshot<Report> = await transaction.get(docRef);
      if (!snapshot.exists()) {
        return Promise.reject(new NotFound("データが見つかりませんでした"));
      }

      transaction.set(docRef, payload, { merge: true });

      return docRef;
    });

    return transaction;
  }
}
