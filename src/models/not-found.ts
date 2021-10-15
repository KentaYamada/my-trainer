import { FirestoreError, FirestoreErrorCode } from "firebase/firestore";

/**
 * Not found error class
 */
export class NotFound implements FirestoreError {
  code: FirestoreErrorCode;
  message: string;
  name: string;

  constructor(code: FirestoreErrorCode, message: string) {
    this.code = code;
    this.message = message;
    this.name = "NotFound";
  }
}
