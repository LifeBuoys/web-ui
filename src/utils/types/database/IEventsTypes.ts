import { DocumentReference, TimestampBaseType } from "./IGeneralTypes";

export type Event = TimestampBaseType & {
  address_ref: DocumentReference;
  disposal_ref: DocumentReference;
  managing_user_ref: DocumentReference;
  estimated_weight: number;
  end_at: number; // UTC epoch time
};
