import { setDoc, DocumentData } from "firebase/firestore";
import { assertFails, assertSucceeds, RulesTestContext } from "@firebase/rules-unit-testing";
import { clearUpFirestoreData, clearUpTestApp, getAuthorizedContext } from "./test-app";

describe("reports collection security tests", () => {
  afterAll(async () => {
    await clearUpTestApp();
  });

  afterEach(async () => {
    await clearUpFirestoreData();
  });

  describe("report document schema validation tests", () => {
    it("validate succeeded", async () => {
      const data: DocumentData = {
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      };
      const context: RulesTestContext = await getAuthorizedContext();
      const doc = context.firestore().collection("reports").doc();
      await assertSucceeds(setDoc(doc, data));
    });

    it.each([
      {
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date()
      },
      {
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date(),
        ham: "spam"
      }
    ])("invalid request size", async (data: DocumentData) => {
      const context: RulesTestContext = await getAuthorizedContext();
      const doc = context.firestore().collection("reports").doc();
      await assertFails(setDoc(doc, data));
    });
  });
});
