import Long from "long";
import { Akash, defaultFee } from "../akash/akash";
import { MsgDepositDeployment } from "../codec/akash/deployment/v1beta2/deployment";
import { BroadcastTxResponse } from "@cosmjs/stargate";
import { TxParams } from "../akash/types";
import { Coin } from "../codec/cosmos/base/v1beta2/coin";

export interface TxDeploymentDepositParams extends TxParams {
  dseq: number;
  amount: Coin;
}

export class TxDeploymentDeposit {
  private readonly akash: Akash;

  constructor(akash: Akash) {
    this.akash = akash;
  }

  public async params(
    params: TxDeploymentDepositParams
  ): Promise<BroadcastTxResponse> {
    const owner = this.akash.address;

    const { memo = "", fee = defaultFee, dseq, amount } = params;

    const request: MsgDepositDeployment = {
      id: {
        owner: owner,
        dseq: new Number(dseq),
      },
      amount: amount,
    };

    return this.akash.signingClient.deploymentDeposit(
      owner,
      request,
      fee,
      memo
    );
  }
}
