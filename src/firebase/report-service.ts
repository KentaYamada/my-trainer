import {
  addDoc,
  collection,
  doc,
  endAt,
  getDoc,
  getDocs,
  query,
  runTransaction,
  startAt,
  CollectionReference,
  DocumentReference,
  DocumentSnapshot,
  Query,
  QuerySnapshot,
  QueryDocumentSnapshot,
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

  private static getCollection(): CollectionReference<Report> {
    return collection(db, ReportService.COLLECTION_NAME).withConverter(ReportConverter);
  }

  private static getDocument(id: string): DocumentReference<Report> {
    return doc(db, ReportService.COLLECTION_NAME, id).withConverter(ReportConverter);
  }

  static async create(payload: Report): Promise<DocumentReference<Report>> {
    return await addDoc(ReportService.getCollection(), payload);
  }

  static async edit(payload: Report): Promise<DocumentReference<Report>> {
    const transaction = runTransaction(db, async (transaction: Transaction) => {
      if (payload.id === "") {
        return Promise.reject(new BadRequest("IDをセットしてください"));
      }

      const docRef: DocumentReference<Report> = ReportService.getDocument(payload.id);
      const snapshot: DocumentSnapshot<Report> = await transaction.get(docRef);
      if (!snapshot.exists()) {
        return Promise.reject(new NotFound("データが見つかりませんでした"));
      }

      transaction.set(docRef, payload, { merge: true });

      return docRef;
    });

    return transaction;
  }

  static async delete(id: string): Promise<void> {
    const transaction = runTransaction(db, async (transaction: Transaction) => {
      if (id === "") {
        return Promise.reject(new BadRequest("IDをセットしてください"));
      }

      const docRef: DocumentReference<Report> = ReportService.getDocument(id);
      const snapshot: DocumentSnapshot<Report> = await transaction.get(docRef);
      if (!snapshot.exists()) {
        return Promise.reject(new NotFound("データが見つかりませんでした"));
      }

      transaction.delete(docRef);
    });

    return transaction;
  }

  static async fetch(fromDate: Date, toDate: Date): Promise<Report[]> {
    const q: Query<Report> = query(ReportService.getCollection(), startAt(fromDate), endAt(toDate));
    const snapshot: QuerySnapshot<Report> = await getDocs(q);
    return snapshot.docs.map((d: QueryDocumentSnapshot<Report>) => d.data());
  }

  static async fetchById(id: string): Promise<Report> {
    if (id === "") {
      return Promise.reject(new BadRequest("IDをセットしてください"));
    }

    const docRef: DocumentSnapshot<Report> = await getDoc(ReportService.getDocument(id));
    const data: Report | undefined = docRef.data();
    if (!data) {
      return Promise.reject(new NotFound("データが見つかりませんでした"));
    }

    return data;
  }
}
