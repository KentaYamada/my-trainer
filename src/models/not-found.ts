import { FirestoreError, FirestoreErrorCode } from "firebase/firestore";

/**
 * Not found error class
 */
export class NotFound implements FirestoreError {
  code: FirestoreErrorCode;
  message: string;
  name: string;

  constructor(message: string) {
    this.code = "not-found";
    this.message = message;
    this.name = "NotFound";
  }
}
