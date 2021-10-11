import { initializeTestEnvironment, RulesTestEnvironment, RulesTestContext } from "@firebase/rules-unit-testing";

/**
 * Get initialized firebase test app instance
 */
export const getTestApp = async (): Promise<RulesTestEnvironment> => {
  return await initializeTestEnvironment({
    projectId: "my-trainer-test-app",
    firestore: {
      host: "localhost",
      port: 8082
    }
  });
};

/**
 * Clean up firestore data
 */
export const clearUpFirestoreData = async (): Promise<void> => {
  const testApp: RulesTestEnvironment = await getTestApp();
  await testApp.clearFirestore();
};

/**
 * Clean up firebase test app
 */
export const clearUpTestApp = async (): Promise<void> => {
  const testApp: RulesTestEnvironment = await getTestApp();
  await testApp.cleanup();
};

/**
 * Get authorized test context
 */
export const getAuthorizedContext = async (): Promise<RulesTestContext> => {
  const testApp: RulesTestEnvironment = await getTestApp();
  return testApp.authenticatedContext("test_user");
};

/**
 * Get unauthorized test context
 */
export const getUnauthorizedContext = async (): Promise<RulesTestContext> => {
  const testApp: RulesTestEnvironment = await getTestApp();
  return testApp.unauthenticatedContext();
};
