/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  Plugin,
  PluginInterface,
} from "../../../../@1inch/token-plugins/contracts/Plugin";

const _abi = [
  {
    inputs: [],
    name: "AccessDenied",
    type: "error",
  },
  {
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20Plugins",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "updateBalances",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class Plugin__factory {
  static readonly abi = _abi;
  static createInterface(): PluginInterface {
    return new Interface(_abi) as PluginInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Plugin {
    return new Contract(address, _abi, runner) as unknown as Plugin;
  }
}
