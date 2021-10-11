import { initializeApp, FirebaseOptions } from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

const appOptions: FirebaseOptions = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID
};

export const firebaseApp = initializeApp(appOptions);
export const db = getFirestore(firebaseApp);

if (["development", "test"].includes(process.env.NODE_ENV)) {
  connectFirestoreEmulator(db, "localhost", 8082, { mockUserToken: { user_id: "test" } });
}
