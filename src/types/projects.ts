import { QuantConnectResponse } from "./core";

// TODO - project model
export type QuantConnectProject = any;
export type QuantConnectVersion = any;

export type ReadProjectParams = {
  projectId: number;
};

export type CreateProjectParams = {
  name: string;
  language: "C#" | "Py";
};

export type UpdateProjectParams = ReadProjectParams & {
  name: string;
  description: string;
};

// TODO - types
export type QuantConnectProjectsResponse = QuantConnectResponse & {
  projects: Array<QuantConnectProject>;
  versions: Array<QuantConnectVersion>;
};
