import { collection, getDocs, writeBatch } from "firebase/firestore";
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
});
