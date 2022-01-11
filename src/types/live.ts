import { ReadProjectParams } from "./projects";
import { QuantConnectResponse, PaginationParams } from "./core";

export type QuantConnectOrder = any;

export type LiveAlgoStatus =
  | "DeployError"
  | "InQueue"
  | "Running"
  | "Stopped"
  | "Liquidated"
  | "Deleted"
  | "Completed"
  | "RuntimeError"
  | "Invalid"
  | "LoggingIn"
  | "Initializing"
  | "History";

export type BrokerageType =
  | "Interactive"
  | "FXCM"
  | "Oanda"
  | "Tradier"
  | "PaperTrading"
  | "Alpaca"
  | "Bitfinex"
  | "Binance"
  | "GDAX";

export type ReadLiveListParams = Partial<PaginationParams> & {
  status: LiveAlgoStatus;
};

export type ReadLiveAlgoParams = ReadProjectParams & {
  deployId: string;
};

export type BrokerageEnvironment = "live" | "paper";

export type BaseLiveAlgorithmSettings = {
  id: string;
  user: string;
  environment: BrokerageEnvironment;
  password: string;
  account: string;
};

export type CreateLiveParams = ReadProjectParams & {
  compileId: string;
  serverType: string;
  versionId: string;
  baseLiveAlgorithmSettings: BaseLiveAlgorithmSettings;
};

export type ReadLiveParams = ReadLiveListParams | ReadLiveAlgoParams;

export type QuantConnectLiveResponse = QuantConnectResponse & {
  live: Array<any>;
};

export type QuantConnectCreateLiveResponse = QuantConnectResponse & {
  projectId: number;
  deployId: string;
  status: LiveAlgoStatus;
  launched: string;
  stopped: string;
  brokerage: BrokerageType;
  subscription: string;
  error?: string;
};
