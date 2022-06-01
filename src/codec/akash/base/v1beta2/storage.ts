import { Attribute } from "../../../../codec/akash/base/v1beta2/attribute";

export interface ResourceValue {
  val: Uint8Array; // int string
}

export interface Storage {
  name: string;
  quantity?: ResourceValue;
  attributes?: Attribute[];
}
