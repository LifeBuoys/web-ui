import { DocumentReference } from "firebase/firestore";

// general types
export type TimestampBaseType = {
  created_at: number; // UTC epoch time
  updated_at: number; // UTC epoch time
};

export { DocumentReference };
