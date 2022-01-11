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

export type ReadLiveListParams = Partial<PaginationParams> & {
  status: LiveAlgoStatus;
};

export type ReadLiveAlgoParams = ReadProjectParams & {
  deployId: string;
};

export type ReadLiveParams = ReadLiveListParams | ReadLiveAlgoParams;

export type QuantConnectLiveResponse = QuantConnectResponse & {
  live: Array<any>;
};
