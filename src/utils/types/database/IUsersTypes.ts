import { DocumentReference } from "./IGeneralTypes";

export type email = `${string}@${string}.${string}`;

export type Contact = {
  email: email;
  phone: number;
};

export type PaymentAccount = {
  account_number: string;
  account_type: string;
  bank: string;
  billing_address_ref: DocumentReference;
  holder_name: string;
};

export type DisposalRequesterType = 1;
export type DeliveryPartnerType = 2;
export type RepurposeFacilityStaffType = 3;

type User = {
  address_ref: DocumentReference;
  contact: Contact;
  first_name: string;
  last_name: string;
};

export type DisposalRequester = User & {
  type: DisposalRequesterType;
};

export type DeliveryPartner = User & {
  payment?: PaymentAccount;
  type: DeliveryPartnerType;
};

export type RepurposeFacilityStaff = User & {
  payment?: PaymentAccount;
  facilities_refs?: Array<DocumentReference>;
  type: RepurposeFacilityStaffType;
};
