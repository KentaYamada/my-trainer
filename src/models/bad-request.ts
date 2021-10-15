import { FirestoreError, FirestoreErrorCode } from "firebase/firestore";

/**
 * Bad request error class
 */
export class BadRequest implements FirestoreError {
  code: FirestoreErrorCode;
  message: string;
  name: string;

  constructor(message: string) {
    this.code = "aborted";
    this.message = message;
    this.name = "BadRequest";
  }
}
