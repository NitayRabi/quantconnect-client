import { Authenticate } from "./core";
import {
  CreateProject,
  ReadProject,
  UpdateProject,
  DeleteProject,
} from "./projects";
import { ReadLive, CreateLive, LiquidateLive, StopLive } from "./live";
import { CreateFile, ReadFiles, UpdateFile, DeleteFile } from "./files";

/**
 * @hidden
 */
export type EndpointToMethod = {
  authenticate: Authenticate;
  "projects/create": CreateProject;
  "projects/read": ReadProject;
  "projects/update": UpdateProject;
  "projects/delete": DeleteProject;
  "files/create": CreateFile;
  "files/read": ReadFiles;
  "files/update": UpdateFile;
  "files/delete": DeleteFile;
  "live/read": ReadLive;
  "live/create": CreateLive;
  "live/update/liquidate": LiquidateLive;
  "live/update/stop": StopLive;
};

export type Method<Return, Params = undefined> = Params extends undefined
  ? (params?: Params) => Promise<Return>
  : (params: Params) => Promise<Return>;

export type QuantConnectClient = {
  authenticate: Authenticate;
  live: {
    read: ReadLive;
    create: CreateLive;
    stop: StopLive;
    liquidate: LiquidateLive;
  };
  files: {
    create: CreateFile;
    read: ReadFiles;
    update: UpdateFile;
    delete: DeleteFile;
  };
  projects: {
    create: CreateProject;
    read: ReadProject;
    update: UpdateProject;
    delete: DeleteProject;
  };
};
