/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta2/coin";

export const protobufPackage = "akash.deployment.v1beta2";

/** Params defines the parameters for the x/deployment package */
export interface Params {
  deploymentMinDeposit?: Coin;
}

const baseParams: object = {};

export const Params = {
  encode(
    message: Params,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.deploymentMinDeposit !== undefined) {
      Coin.encode(
        message.deploymentMinDeposit,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deploymentMinDeposit = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (
      object.deploymentMinDeposit !== undefined &&
      object.deploymentMinDeposit !== null
    ) {
      message.deploymentMinDeposit = Coin.fromJSON(object.deploymentMinDeposit);
    } else {
      message.deploymentMinDeposit = undefined;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.deploymentMinDeposit !== undefined &&
      (obj.deploymentMinDeposit = message.deploymentMinDeposit
        ? Coin.toJSON(message.deploymentMinDeposit)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (
      object.deploymentMinDeposit !== undefined &&
      object.deploymentMinDeposit !== null
    ) {
      message.deploymentMinDeposit = Coin.fromPartial(
        object.deploymentMinDeposit
      );
    } else {
      message.deploymentMinDeposit = undefined;
    }
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}