import { QueryClientImpl } from "src/codec/akash/market/v1beta1/query";
import Get from "./get/get";
import List from "./list/list";

export default class Lease {
  public readonly get: Get;
  public readonly list: List;

  constructor (queryService: QueryClientImpl) {
    this.get = new Get(queryService);
    this.list = new List(queryService);
  }
}