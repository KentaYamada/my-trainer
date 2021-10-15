import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  writeBatch,
  DocumentData,
  FirestoreError,
  DocumentSnapshot
} from "firebase/firestore";
import { Report } from "@/models/report";
import { db } from "@/firebase/firebase-app";
import { ReportService } from "@/firebase/report-service";

describe("ReportService tests", () => {
  afterEach(async () => {
    const batch = writeBatch(db);
    const querySnapshot = await getDocs(collection(db, "reports"));

    querySnapshot.forEach(snap => batch.delete(snap.ref));
    await batch.commit();
  });

  describe("create method tests", () => {
    it("[positive] create succeeded", async () => {
      const payload = new Report("", new Date(), new Date(), new Date(), "test", "test", "test", "test", "test");
      await expect(ReportService.create(payload)).resolves.not.toBeUndefined();
    });
  });

  describe("edit method tests", () => {
    const ID = "test_id";

    beforeEach(async () => {
      const payload: DocumentData = {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      };
      const docRef = doc(db, "reports", ID);
      await setDoc(docRef, payload);
    });

    it("[positive] edit succeeded", async () => {
      const payload = new Report(ID, new Date(), new Date(), new Date(), "test", "test", "test", "test", "test");
      await expect(ReportService.edit(payload)).resolves.not.toBeUndefined();
    });

    it("[negative] report id is empty", async () => {
      const payload = new Report("", new Date(), new Date(), new Date(), "test", "test", "test", "test", "test");
      await ReportService.edit(payload).catch((error: FirestoreError) => {
        expect(error.code).toBe("aborted");
        expect(error.name).toBe("BadRequest");
        expect(error.message).toBe("IDをセットしてください");
      });
    });

    it("[negative] report is not exists", async () => {
      const payload = new Report(
        "not_exist_document",
        new Date(),
        new Date(),
        new Date(),
        "test",
        "test",
        "test",
        "test",
        "test"
      );
      await ReportService.edit(payload).catch((error: FirestoreError) => {
        expect(error.code).toBe("not-found");
        expect(error.name).toBe("NotFound");
        expect(error.message).toBe("データが見つかりませんでした");
      });
    });
  });

  describe("delete method tests", () => {
    const ID = "test_id";

    beforeEach(async () => {
      const payload: DocumentData = {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      };
      const docRef = doc(db, "reports", ID);
      await setDoc(docRef, payload);
    });

    it("[positive] edit succeeded", async () => {
      await expect(ReportService.delete(ID)).resolves.toBeUndefined();
      await getDoc(doc(db, "reports", ID)).then((data: DocumentSnapshot<DocumentData>) => {
        expect(data.exists()).toBeFalsy();
      });
    });

    it("[negative] report id is empty", async () => {
      await ReportService.delete(ID).catch((error: FirestoreError) => {
        expect(error.code).toBe("aborted");
        expect(error.name).toBe("BadRequest");
        expect(error.message).toBe("IDをセットしてください");
      });
    });

    it("[negative] report is not exists", async () => {
      await ReportService.delete("not_exist_document").catch((error: FirestoreError) => {
        expect(error.code).toBe("not-found");
        expect(error.name).toBe("NotFound");
        expect(error.message).toBe("データが見つかりませんでした");
      });
    });
  });

  describe("fetchById methods", () => {
    const ID = "test_id";

    beforeEach(async () => {
      const payload: DocumentData = {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      };
      const docRef = doc(db, "reports", ID);
      await setDoc(docRef, payload);
    });

    it("[positive] fetch succeeded", async () => {
      await ReportService.fetchById(ID).then((data: Report) => {
        expect(data).not.toBeUndefined();
        expect(data.id).toBe(ID);
      });
    });

    it("[negative] report id is empty", async () => {
      await ReportService.fetchById("").catch((error: FirestoreError) => {
        expect(error.code).toBe("aborted");
        expect(error.name).toBe("BadRequest");
        expect(error.message).toBe("IDをセットしてください");
      });
    });

    it("[negative] report is not exists", async () => {
      await ReportService.fetchById("not_exist_document").catch((error: FirestoreError) => {
        expect(error.code).toBe("not-found");
        expect(error.name).toBe("NotFound");
        expect(error.message).toBe("データが見つかりませんでした");
      });
    });
  });
});
