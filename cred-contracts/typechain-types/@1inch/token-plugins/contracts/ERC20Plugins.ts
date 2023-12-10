/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface ERC20PluginsInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addPlugin"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "decimals"
      | "decreaseAllowance"
      | "hasPlugin"
      | "increaseAllowance"
      | "maxPluginsPerAccount"
      | "name"
      | "pluginAt"
      | "pluginBalanceOf"
      | "pluginCallGasLimit"
      | "plugins"
      | "pluginsCount"
      | "removeAllPlugins"
      | "removePlugin"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "PluginAdded"
      | "PluginRemoved"
      | "Transfer"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addPlugin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "hasPlugin",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxPluginsPerAccount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pluginAt",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginBalanceOf",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginCallGasLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "plugins",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "pluginsCount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeAllPlugins",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removePlugin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addPlugin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasPlugin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "maxPluginsPerAccount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pluginAt", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pluginBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pluginCallGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "plugins", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pluginsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeAllPlugins",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removePlugin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PluginAddedEvent {
  export type InputTuple = [account: AddressLike, plugin: AddressLike];
  export type OutputTuple = [account: string, plugin: string];
  export interface OutputObject {
    account: string;
    plugin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PluginRemovedEvent {
  export type InputTuple = [account: AddressLike, plugin: AddressLike];
  export type OutputTuple = [account: string, plugin: string];
  export interface OutputObject {
    account: string;
    plugin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ERC20Plugins extends BaseContract {
  connect(runner?: ContractRunner | null): ERC20Plugins;
  waitForDeployment(): Promise<this>;

  interface: ERC20PluginsInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addPlugin: TypedContractMethod<[plugin: AddressLike], [void], "nonpayable">;

  allowance: TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  decreaseAllowance: TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  hasPlugin: TypedContractMethod<
    [account: AddressLike, plugin: AddressLike],
    [boolean],
    "view"
  >;

  increaseAllowance: TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  maxPluginsPerAccount: TypedContractMethod<[], [bigint], "view">;

  name: TypedContractMethod<[], [string], "view">;

  pluginAt: TypedContractMethod<
    [account: AddressLike, index: BigNumberish],
    [string],
    "view"
  >;

  pluginBalanceOf: TypedContractMethod<
    [plugin: AddressLike, account: AddressLike],
    [bigint],
    "view"
  >;

  pluginCallGasLimit: TypedContractMethod<[], [bigint], "view">;

  plugins: TypedContractMethod<[account: AddressLike], [string[]], "view">;

  pluginsCount: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  removeAllPlugins: TypedContractMethod<[], [void], "nonpayable">;

  removePlugin: TypedContractMethod<
    [plugin: AddressLike],
    [void],
    "nonpayable"
  >;

  symbol: TypedContractMethod<[], [string], "view">;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [from: AddressLike, to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addPlugin"
  ): TypedContractMethod<[plugin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "decreaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasPlugin"
  ): TypedContractMethod<
    [account: AddressLike, plugin: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "increaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "maxPluginsPerAccount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pluginAt"
  ): TypedContractMethod<
    [account: AddressLike, index: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "pluginBalanceOf"
  ): TypedContractMethod<
    [plugin: AddressLike, account: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "pluginCallGasLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "plugins"
  ): TypedContractMethod<[account: AddressLike], [string[]], "view">;
  getFunction(
    nameOrSignature: "pluginsCount"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "removeAllPlugins"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "removePlugin"
  ): TypedContractMethod<[plugin: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [from: AddressLike, to: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "PluginAdded"
  ): TypedContractEvent<
    PluginAddedEvent.InputTuple,
    PluginAddedEvent.OutputTuple,
    PluginAddedEvent.OutputObject
  >;
  getEvent(
    key: "PluginRemoved"
  ): TypedContractEvent<
    PluginRemovedEvent.InputTuple,
    PluginRemovedEvent.OutputTuple,
    PluginRemovedEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "PluginAdded(address,address)": TypedContractEvent<
      PluginAddedEvent.InputTuple,
      PluginAddedEvent.OutputTuple,
      PluginAddedEvent.OutputObject
    >;
    PluginAdded: TypedContractEvent<
      PluginAddedEvent.InputTuple,
      PluginAddedEvent.OutputTuple,
      PluginAddedEvent.OutputObject
    >;

    "PluginRemoved(address,address)": TypedContractEvent<
      PluginRemovedEvent.InputTuple,
      PluginRemovedEvent.OutputTuple,
      PluginRemovedEvent.OutputObject
    >;
    PluginRemoved: TypedContractEvent<
      PluginRemovedEvent.InputTuple,
      PluginRemovedEvent.OutputTuple,
      PluginRemovedEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
  };
}
