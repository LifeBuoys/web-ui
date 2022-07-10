import { DocumentReference } from "./IGeneralTypes";

export type Delivery = {
  delivery_user_ref: DocumentReference;
  disposal_ref: DocumentReference;
  destination: Destination;
  origin: Origin;
};

export type Destination = {
  delivery_ref: DocumentReference;
  facility_ref: DocumentReference;
  dropped_off_at: number; // UTC epoch time
};

export type Origin = {
  delivery_ref: DocumentReference;
  pickedup_off_at: number; // UTC epoch time
};
