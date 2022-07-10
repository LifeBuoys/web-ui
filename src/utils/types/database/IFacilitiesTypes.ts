import { DocumentReference } from "./IGeneralTypes";

export type Facility = {
  address_ref: DocumentReference;
  user_refs: Array<DocumentReference>;
  capacity: {
    current: number;
    max: number | 100;
    percentage_full: number;
  };
  open_time: string;
  close_time: string;
};
