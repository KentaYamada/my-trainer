import { FirestoreError, FirestoreErrorCode } from "firebase/firestore";

/**
 * Bad request error class
 */
export class BadRequest implements FirestoreError {
  code: FirestoreErrorCode;
  message: string;
  name: string;

  constructor(code: FirestoreErrorCode, message: string) {
    this.code = code;
    this.message = message;
    this.name = "BadRequest";
  }
}
