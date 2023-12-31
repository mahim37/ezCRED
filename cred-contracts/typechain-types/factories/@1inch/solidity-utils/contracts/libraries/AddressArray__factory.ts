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
import type { NonPayableOverrides } from "../../../../../common";
import type {
  AddressArray,
  AddressArrayInterface,
} from "../../../../../@1inch/solidity-utils/contracts/libraries/AddressArray";

const _abi = [
  {
    inputs: [],
    name: "IndexOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "OutputArrayTooSmall",
    type: "error",
  },
  {
    inputs: [],
    name: "PopFromEmptyArray",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60808060405234601757603a9081601d823930815050f35b600080fdfe600080fdfea2646970667358221220d01334c36225faf3061a09e2c865f4d203586a52f238f8cff0bfd6c7b162109964736f6c63430008140033";

type AddressArrayConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AddressArrayConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AddressArray__factory extends ContractFactory {
  constructor(...args: AddressArrayConstructorParams) {
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
      AddressArray & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): AddressArray__factory {
    return super.connect(runner) as AddressArray__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AddressArrayInterface {
    return new Interface(_abi) as AddressArrayInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): AddressArray {
    return new Contract(address, _abi, runner) as unknown as AddressArray;
  }
}
