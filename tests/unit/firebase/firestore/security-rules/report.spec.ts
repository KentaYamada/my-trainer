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
      const context: RulesTestContext = await getAuthorizedContext();
      const doc = context.firestore().collection("reports").doc();
      await assertSucceeds(setDoc(doc, data));
    });

    it.each([
      {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
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

    it.each([
      {
        practice_date: null,
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      },
      {
        practice_date: "2021-01-01 00:00:00",
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: null,
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: "2021-01-01 10:00:00",
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: null,
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: "2021-01-01 11:00:00",
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: null,
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: null,
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "test",
        implessions: null,
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "test",
        implessions: "",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: null,
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "",
        memo: "",
        created_at: new Date(),
        modified_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: null,
        modified_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: "2021-01-01 10:00:00",
        modified_at: new Date()
      },
      {
        practice_date: new Date(),
        practice_time_from: new Date(),
        practice_time_to: new Date(),
        goal: "Test complete",
        plan: "test",
        implessions: "So great",
        next_action: "nothing",
        memo: "",
        created_at: new Date(),
        modified_at: null
      }
    ])("invalid value", async (data: DocumentData) => {
      const context: RulesTestContext = await getAuthorizedContext();
      const doc = context.firestore().collection("reports").doc();
      await assertFails(setDoc(doc, data));
    });
  });
});