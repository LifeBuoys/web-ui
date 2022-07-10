import { DocumentReference, TimestampBaseType } from "./IGeneralTypes";

export type Package = {
  weight: number;
};

export type Disposal = TimestampBaseType & {
  client_user_ref: DocumentReference;
  delivery_ref: DocumentReference;
  package: Package;
  status: DisposalStatus;
};

export type DisposalStatus = {
  created: 0;
  facility_approved: 1;
  delivery_requested: 2;
  delivery_start: 3;
  delivery_complete: 4;
  error_creation: 100;
  error_facility_approval: 101;
  error_delivery_request: 102;
  error_delivery_start: 103;
};
