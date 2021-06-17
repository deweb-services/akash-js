import { ProtobufRpcClient } from "@cosmjs/stargate";
import { QueryClientImpl } from "../../../codec/akash/market/v1beta1/query";
import Bid from "./bid/Bid";
import Lease from "./lease/Lease";
import Order from "./order/Order";

export default class Market {
  public readonly bid: Bid;
  public readonly lease: Lease;
  public readonly order: Order;

  constructor(rpcClient: ProtobufRpcClient) {
    const queryService = new QueryClientImpl(rpcClient);
    this.bid = new Bid(queryService);
    this.lease = new Lease(queryService);
    this.order = new Order(queryService);
  }
}