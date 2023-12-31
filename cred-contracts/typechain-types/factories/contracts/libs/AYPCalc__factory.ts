/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  AYPCalc,
  AYPCalcInterface,
} from "../../../contracts/libs/AYPCalc";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "fromAsset",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "toAsset",
        type: "int256",
      },
    ],
    name: "calculateAYP",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001a576102229081610020823930815050f35b600080fdfe60808060405260048036101561001457600080fd5b6000803560e01c631a502de91461002a57600080fd5b60407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e95781356024938435821591821561019057508015610165576305f5e100059061013a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82147f800000000000000000000000000000000000000000000000000000000000000082141661010f5705916064830292808405606414901517156100e457602083606460405191058152f35b8192507f4e487b71000000000000000000000000000000000000000000000000000000006011925252fd5b84836011867f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b84836012867f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b85846012877f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b8060208881897f08c379a000000000000000000000000000000000000000000000000000000000606496528401528201527f41595043616c633a204d756c7469706c69636174696f6e206f766572666c6f776044820152fd5b80fdfea2646970667358221220dcf716ab4c4fb23c8f21e73ca0551cff64fe2cfda5f9ec71a98c755bf0acd0b164736f6c63430008140033";

type AYPCalcConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AYPCalcConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AYPCalc__factory extends ContractFactory {
  constructor(...args: AYPCalcConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      AYPCalc & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AYPCalc__factory {
    return super.connect(runner) as AYPCalc__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AYPCalcInterface {
    return new Interface(_abi) as AYPCalcInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): AYPCalc {
    return new Contract(address, _abi, runner) as unknown as AYPCalc;
  }
}
