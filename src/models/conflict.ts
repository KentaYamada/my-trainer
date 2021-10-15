import { FirestoreError, FirestoreErrorCode } from "firebase/firestore";

/**
 * Conflict error class
 */
export class Conflict implements FirestoreError {
  code: FirestoreErrorCode;
  message: string;
  name: string;

  constructor(code: FirestoreErrorCode, message: string) {
    this.code = code;
    this.message = message;
    this.name = "Conflict";
  }
}
