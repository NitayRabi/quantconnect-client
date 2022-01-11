import {
  CreateProjectParams,
  ReadProjectParams,
  UpdateProjectParams,
  QuantConnectProjectsResponse,
} from "./projects";
import { QuantConnectResponse } from "./core";
import {
  QuantConnectLiveResponse,
  ReadLiveParams,
  CreateLiveParams,
} from "./live";
import {
  CreateFileParams,
  ReadFileParams,
  UpdateFileParams,
  DeleteFileParams,
} from "./files";
import { QuantConnectCreateLiveResponse } from ".";

export type EndpointMethod<T extends EndpointDescription<any, any, any>> =
  T["paramsRequired"] extends true
    ? (params: T["params"]) => Promise<T["response"]>
    : (params?: T["params"]) => Promise<T["response"]>;

export type EndpointDescription<
  Params,
  Response,
  ParamsRequired extends boolean
> = {
  params: Params;
  response: Response;
  paramsRequired: ParamsRequired;
};

export type EndpointToInterface = {
  authenticate: EndpointDescription<never, QuantConnectResponse, false>;
  "projects/create": EndpointDescription<
    CreateProjectParams,
    QuantConnectProjectsResponse,
    true
  >;
  "projects/read": EndpointDescription<
    ReadProjectParams,
    QuantConnectProjectsResponse,
    false
  >;
  "projects/update": EndpointDescription<
    UpdateProjectParams,
    QuantConnectProjectsResponse,
    true
  >;
  "projects/delete": EndpointDescription<ReadProjectParams, never, true>;
  "files/create": EndpointDescription<
    CreateFileParams,
    QuantConnectProjectsResponse,
    true
  >;
  "files/read": EndpointDescription<ReadFileParams, never, false>;
  "files/update": EndpointDescription<UpdateFileParams, never, true>;
  "files/delete": EndpointDescription<
    DeleteFileParams,
    QuantConnectProjectsResponse,
    true
  >;
  "live/read": EndpointDescription<
    ReadLiveParams,
    QuantConnectLiveResponse,
    true
  >;
  "live/create": EndpointDescription<
    CreateLiveParams,
    QuantConnectCreateLiveResponse,
    true
  >;
  "live/update/liquidate": EndpointDescription<
    ReadProjectParams,
    QuantConnectResponse,
    true
  >;
  "live/update/stop": EndpointDescription<
    ReadProjectParams,
    QuantConnectResponse,
    true
  >;
};
