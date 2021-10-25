import { FirestoreError, FirestoreErrorCode } from "firebase/firestore";

/**
 * Conflict error class
 */
export class Conflict implements FirestoreError {
  code: FirestoreErrorCode;
  message: string;
  name: string;

  constructor(message: string) {
    this.code = "aborted";
    this.message = message;
    this.name = "Conflict";
  }
}
