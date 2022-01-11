import {
  CreateProjectParams,
  ReadProjectParams,
  UpdateProjectParams,
  QuantConnectProjectsResponse,
} from "./projects";
import { QuantConnectResponse } from "./core";
import { QuantConnectLiveResponse, ReadLiveParams } from "./live";
import {
  CreateFileParams,
  ReadFileParams,
  UpdateFileParams,
  DeleteFileParams,
} from "./files";

export type EndpointToInterface = {
  authenticate: {
    params: never;
    response: QuantConnectResponse;
    paramsRequired: false;
  };
  "projects/create": {
    params: CreateProjectParams;
    response: QuantConnectProjectsResponse;
    paramsRequired: true;
  };
  "projects/read": {
    params: ReadProjectParams;
    response: QuantConnectProjectsResponse;
    paramsRequired: false;
  };
  "projects/update": {
    params: UpdateProjectParams;
    response: QuantConnectProjectsResponse;
    paramsRequired: true;
  };
  "projects/delete": {
    params: ReadProjectParams;
    response: never;
    paramsRequired: true;
  };
  "files/create": {
    params: CreateFileParams;
    response: QuantConnectProjectsResponse;
    paramsRequired: true;
  };
  "files/read": {
    params: ReadFileParams;
    response: never;
    paramsRequired: false;
  };
  "files/update": {
    params: UpdateFileParams;
    response: never;
    paramsRequired: true;
  };
  "files/delete": {
    params: DeleteFileParams;
    response: QuantConnectProjectsResponse;
    paramsRequired: true;
  };
  "live/read": {
    params: ReadLiveParams;
    response: QuantConnectLiveResponse;
    paramsRequired: true;
  };
};
